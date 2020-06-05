import { Injectable } from '@angular/core';
import { Medication } from '../model/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor() { }

  medications: Medication[] = [
    new Medication("1178966", "48351000", "9494788", "2017-05-22", "Vancomycin Hydrochloride"),
    new Medication("1178963", "60149003", "9494788", "2017-05-22", "Product containing indometacin"),
    new Medication("1176309", "", "", "", "EvaSuperMeds 20mg/5ml Suspension"),
    new Medication("1173536", "598006", "", "", "Erythromycin 250 MG Oral Tablet"),
    new Medication("1171233", "93574", "", "", "Ibuprofen Oral Tablet"),
    new Medication("1171232", "25406", "", "", "Nitrofurazone Topical Cream"),
    new Medication("1170398", "94186", "", "", "Tetracycline 50 mg"),
    new Medication("1170397", "93855", "321123", "", "Ampicillin Oral Suspension")
  ]

  findAll(): Medication[] {
    return this.medications;
  }
}
