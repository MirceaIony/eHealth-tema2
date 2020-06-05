import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tema2';

  constructor(private router: Router) { }
  
  toPatients() {
    this.router.navigateByUrl("patients");
  }

  toMedications() {
    this.router.navigateByUrl("medications");
  }
}
