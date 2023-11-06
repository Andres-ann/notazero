import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error401',
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.css'],
})
export class Error401Component {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
