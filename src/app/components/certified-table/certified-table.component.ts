import { Component, Input } from '@angular/core';
import { Certified } from 'src/app/models/certified.model';
import { HttpClient } from '@angular/common/http';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-certified-table',
  templateUrl: './certified-table.component.html',
  styleUrls: ['./certified-table.component.css'],
})
export class CertifiedTableComponent {
  @Input() certificados: Certified[] = [];

  constructor(private http: HttpClient) {}

  generatePDF(certificado: Certified) {
    const fecha = new Date(certificado.fecha);
    const dia = fecha.getDate(); // Extraer el día de la fecha
    const mesAnio = fecha.toLocaleString('es-AR', {
      month: 'long',
      year: 'numeric',
    });

    console.log(fecha);

    // Define y almacena las imagenes en viariables
    const imageHeaderUrl = 'https://notazer0.s3.amazonaws.com/headerPdf.jpg';
    let imageSignatureUrl =
      certificado.estado === 'pendiente'
        ? 'https://notazer0.s3.amazonaws.com/pending-review.png'
        : 'https://notazer0.s3.amazonaws.com/firma-ifts11.png';

    // Templates de texto
    let template: String;
    let isInscription = '';

    if (certificado.tipoConstancia === 'CONSTANCIA DE ALUMNO REGULAR') {
      template = `Por la presente se deja constancia que ${certificado.nombre} DNI/LC/LE N° ${certificado.dni} es alumno/a regular de la carrera ${certificado.carrera}, que se dicta en este establecimiento de lunes a viernes de 18.30 a 22.30 horas.------`;
    } else if (certificado.tipoConstancia === 'CONSTANCIA DE INSCRIPCIÓN') {
      template = `Por la presente se deja constancia que ${certificado.nombre} DNI/LC/LE N° ${certificado.dni} se encuentra inscripta/o en la carrera ${certificado.carrera}, que se dicta en este establecimiento de lunes a viernes de 18.30 a 22.30 horas.------`;

      isInscription = `Se deja constancia que ${certificado.nombre} DNI: ${certificado.dni} es alumno de primer
      año de nuestro establecimiento, pero para obtener la regularidad es necesario aprobar al menos una materia.-
      `;
    } else if (certificado.tipoConstancia === 'CONSTANCIA DE EXAMEN') {
      template = `Por la presente se deja constancia que ${certificado.nombre} DNI/LC/LE N° ${certificado.dni} ha rendido examen ${certificado.tipoExamen} de la asignatura ${certificado.asignatura}.------`;
    }

    // Cargar la imagen utilizando HttpClient
    this.http
      .get(imageHeaderUrl, { responseType: 'blob' })
      .subscribe((headerBlob: Blob) => {
        this.http
          .get(imageSignatureUrl, { responseType: 'blob' })
          .subscribe((signatureBlob: Blob) => {
            const readerHeader = new FileReader();
            const readerSignature = new FileReader();

            readerHeader.onload = () => {
              readerSignature.onload = () => {
                const imageHeaderBase64 = readerHeader.result as string;
                const imageSignatureBase64 = readerSignature.result as string;

                const documentDefinition = {
                  content: [
                    {
                      image: imageHeaderBase64,
                      width: 480,
                      style: [{ alignment: 'center' }],
                    },
                    {
                      text: certificado.tipoConstancia,
                      fontSize: 14,
                      style: [
                        { alignment: 'center', bold: true, lineHeight: 2 },
                      ],
                    },
                    {
                      text: `${template}`,
                      fontSize: 14,
                    },

                    {
                      text: `Se extiende la presente a los ${dia} días del mes de ${mesAnio}, a pedido del interesado/a, para ser presentada ante: ${certificado.aSerPresentadoAnte}`,
                      fontSize: 14,
                      margin: [0, 10, 0, 0],
                    },
                    {
                      image: imageSignatureBase64,
                      width: 360,
                      style: [{ alignment: 'center' }],
                    },
                    {
                      text: `Código único de identificación: ${certificado.certifiedId}`,
                      fontSize: 8,
                      style: [{ alignment: 'center' }],
                    },
                    {
                      text: `${isInscription}`,
                      fontSize: 14,
                      italics: true,
                      bold: true,
                      margin: [0, 15, 0, 0],
                    },
                  ],
                };

                // Genera el PDF
                const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
                pdfDocGenerator.download('constancia.pdf');
              };

              readerSignature.readAsDataURL(signatureBlob);
            };

            readerHeader.readAsDataURL(headerBlob);
          });
      });
  }
}
