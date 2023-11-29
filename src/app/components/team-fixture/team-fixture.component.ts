import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { FormsModule } from '@angular/forms';
import { DetalleService } from 'src/app/services/detalle.service';
import { Router } from '@angular/router'
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DateRange } from '@angular/material/datepicker';


@Component({
  selector: 'app-team-fixture',
  templateUrl: './team-fixture.component.html',
  styleUrls: ['./team-fixture.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,FormsModule],
})
export class TeamFixtureComponent{
 
  fixture:any;
  @Input ()
  id:any;
  fromDate: Date | null = null 
  toDate: Date | null = null
  date = null;
  picker=''

  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}

  ngOnInit() {
   
  }
 
  onSearchClick() {
    console.log(this.picker)
    if (this.fromDate && this.toDate) {
      const fromDateString = this.fromDate.toISOString().split('T')[0]; 
      const toDateString = this.toDate.toISOString().split('T')[0];  
      this.footballApiService.getFeaxture(this.id, '2023', fromDateString, toDateString).subscribe({
        next: (data: any) => {
          console.log(data);
          this.fixture = data.response;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('Seleccione ambas fechas');
    }
  }
get selectedRange(): { start: Date | null, end: Date | null } {
    return { start: this.fromDate, end: this.toDate };
  }
 mostrarInformacionPartido(idPartido:number){
  this.router.navigate([`/view-match/${idPartido}`])
}
handleDateInput(selection:any) {
  // `selection` contiene el rango de fechas seleccionado
  console.log('Fecha de inicio:', selection.start);
  console.log('Fecha de fin:', selection.end);

  // Realiza la lógica que necesites con el rango seleccionado
}
 

  }
