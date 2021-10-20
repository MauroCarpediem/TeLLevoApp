import { Component, OnInit } from '@angular/core';

import {NavigationExtras, Router, ActivatedRoute} from '@angular/router';  // IMPORTAR LIBRERIA DE RUTAS
import { ToastController } from '@ionic/angular';// Libreria mensaje Toas


@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {


  //Modelo reseteo clave
  USERVALIDO:any={
    user : "",
    pass : ""
  }

  RESETPASS:any={
      user :"",
      pass1:"",
      pass2:""
  }

  //CAMPO PARA ERRORES
  datofaltante: String = "";



  constructor(private router: Router, private activateRoute:ActivatedRoute, public toastController: ToastController)
  { 

    this.activateRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        {
          let data = this.router.getCurrentNavigation().extras.state.USERVALIDO;
          this.USERVALIDO.user = data.user;
          this.USERVALIDO.pass = data.pass;
          
        }

      
    });
  }


  ngOnInit() {
  }



//ToastMmensaje 
  async mensajeToast(message:string, duration?:number)
{
 const toast = await this.toastController.create(
  {
    message:message,
    duration:duration?duration:3000
  }
 );
  toast.present()
}//cierre mensajeToast



// Validar formulario completo
  validarcambioclave(model:any)
  {
    for(var[key,value] of Object.entries(model))
    {
      if(value=="")
      {
        this.datofaltante=key;
        return false;
      }
      return true;
    }
  }


  //  Funcion para validar usuario y actualizar contraseñas 
  btnCambiarPass(){
    if(this.RESETPASS.user == this.USERVALIDO.user)
    {
      if(this.RESETPASS.pass1 == this.RESETPASS.pass2)
        {
          this.USERVALIDO.pass = this.RESETPASS.pass1
          let navigationExtras:NavigationExtras = {
            state:{
              USERVALIDO: this.USERVALIDO 
            }  
          }
          this.router.navigate([''], navigationExtras ); 
          this.mensajeToast(" Se a cambiado la clave de  " + this.RESETPASS.user + " Correctamente" )
        }
      else
      {
        this.mensajeToast(" ERROR : Contraseñas ingresadas no cohinciden ")
      }
    }
    else{
      this.mensajeToast(" ERROR : Usuario no existe en sistema ")
    }
  }


}
