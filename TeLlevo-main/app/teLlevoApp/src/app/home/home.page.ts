import { Component } from '@angular/core';
import {NavigationExtras, Router, ActivatedRoute} from '@angular/router';  // IMPORTAR LIBRERIA DE RUTAS
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  nombreusuario :String = "sin nombre";


  constructor(private activateRoute: ActivatedRoute, private router:Router, public alertController: AlertController) {

    this.activateRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        {
          let data = this.router.getCurrentNavigation().extras.state.miusuario;
          this.nombreusuario = data.usuario;

        }
    });

  



  }
  

}
