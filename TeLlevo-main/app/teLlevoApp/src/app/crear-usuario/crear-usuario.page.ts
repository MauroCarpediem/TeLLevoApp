import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router, ActivatedRoute} from '@angular/router';  // IMPORTAR LIBRERIA DE RUTAS
import { ToastController } from '@ionic/angular';// Libreria mensaje Toas


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {


USUARIONUEVO:any={
  nombre:"",
  apellido:"",
  email:"",
  user : "",
  pass1 : "",
  pass2 : ""
}

 //CAMPO PARA ERRORES
 datofaltante: String = "";



  constructor(private router: Router, private activateRoute:ActivatedRoute, public toastController: ToastController){ 
  

  }


  ngOnInit() {
  }



  //MENSAJES TOAST 
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


  btnCrearcuenta(){

    let navigationExtras: NavigationExtras = {
      state:{
        NUEVOUSUARIO: this.USUARIONUEVO
      }
    }

  

    if(this.validatorModelo(this.USUARIONUEVO))
    {
      if(this.USUARIONUEVO.pass1 == this.USUARIONUEVO.pass2)
      {
      console.log("asd123")
      
      this.mensajeToast("Cuenta creada correctamente")
      this.router.navigate(['/login'], navigationExtras)
      }
      else{
        this.mensajeToast("contraseñas ingresadas no cohinciden")
      }
    }
    else{
      this.mensajeToast("Falta: "+this.datofaltante);
      }
    };

  





    // Validar Modelo
    validatorModelo(model:any)
    {
      for(var[key,value] of Object.entries(model))
      {
        if(value=="")
        {
          this.datofaltante= key;
          return false;
        }
      }
        return true;
    } // Cierre validar modelo 

  


}


}

