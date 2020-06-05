import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../services/patient.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  patients: Patient[];
  searchKey: string;

  listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['id', 'first_name', 'last_name', 'gender','email'];

  constructor(private patientService: PatientService) {
    
  }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(patients => {
      this.listData = new MatTableDataSource(patients);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
