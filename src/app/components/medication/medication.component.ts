import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MedicationService } from '../../services/medication.service';
import { Medication } from '../../model/medication';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  medications: Medication[];
  searchKey: string;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'code', 'lotNumber', 'expirationDate'];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.medicationService.findAll());
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

}
