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
    const mesAnio = fecha.toLocaleString('es', {
      month: 'long',
      year: 'numeric',
    });

    const imageUrl = 'assets/headerPdf.jpg';

    // Cargar la imagen utilizando HttpClient
    this.http
      .get(imageUrl, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const reader = new FileReader();

        reader.onload = () => {
          const imageBase64 = reader.result as string;

          const documentDefinition = {
            content: [
              {
                image: imageBase64,
                width: 480,
                style: [{ alignment: 'center' }],
              }, // Utiliza la representación base64 de la imagen
              {
                text: certificado.tipoConstancia,
                fontSize: 14,
                style: [{ alignment: 'center', bold: true, lineHeight: 2 }],
              },
              {
                text:
                  'Por la presente se deja constancia que ' +
                  certificado.nombre +
                  ' DNI/LC/LE N° ' +
                  certificado.dni +
                  ' se encuentra inscripto/a en la carrera de ' +
                  certificado.carrera +
                  ', que se dicta en este establecimiento de lunes a viernes de 18:30 a 22:30 horas.-----',
                fontSize: 14,
              },
              {
                text: `Se extiende la presente a los ${dia} días del mes de ${mesAnio}, a pedido del interesado/a, para ser presentada ante: ${certificado.aSerPresentadoAnte}`,
                fontSize: 14,
              },
            ],
          };

          // Genera el PDF
          const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
          pdfDocGenerator.download('constancia.pdf');
        };

        reader.readAsDataURL(blob);
      });
  }
}
