import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  trip:any={
    origen:"",
    destino:"",
    hora:"",
    costo:"",
    cupo:"",
    auto:""
  }

  constructor() { }

  ngOnInit() {
  }

  btnSaveTrip(){
    
    console.log("Usted esta guardando: " + this.trip.origen + " " 
                                          + this.trip.hora+ " " 
                                          + this.trip.auto)
  }

}
