import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import {NavigationExtras, Router,ActivatedRoute} from '@angular/router';  // IMPORTAR LIBRERIA DE RUTAS
import { ToastController } from '@ionic/angular';// Libreria mensaje Toas

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //MODELO FORMULARIO
  login:any={
    usuario:"",
    password:""
    }

  //ERROR POPUP PARA USUARIO
  campoError: String = "";

  //USUARIO DE PRUEBA
  //usuariovalido :String = "everet";
  //passvalida:String = "genius";

  USERVALIDO:any={
    user : "everet",
    pass : "genius"
  }

  USUARIONUEVO:any={
    nombre:"",
    apellido:"",
    email:"",
    user : "",
    pass : ""
  }

  constructor(private router: Router,private activateRoute :ActivatedRoute , public toastController: ToastController)
  { 
    this.activateRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        {
          let data = this.router.getCurrentNavigation().extras.state.USERVALIDO;
          this.USERVALIDO.user = data.user;
          this.USERVALIDO.pass = data.pass;
          
        }
  
    });

    this.activateRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        {
          let data = this.router.getCurrentNavigation().extras.state.NUEVOUSUARIO;
          this.USUARIONUEVO.nombre = data.nombre;
          this.USUARIONUEVO.apellido = data.apellido;
          this.USUARIONUEVO.email = data.email;
          this.USUARIONUEVO.user = data.user;
          this.USUARIONUEVO.pass = data.pass1;
        }
  
    });

  }


  ngOnInit() {

  }


  //BOTON INGRESAR 
  btningresar(){
    if(this.validatorModelo(this.login))
    {
      console.log("ok: formulario completo")
      this.validarUsuario()
    }
    else{
      this.mensajeToast("Falta: "+this.campoError);
    };


  } // Cierre boton ingresar
  


  
  // Boton crear usuario
  btnNewUser(){
    
    console.log("Usted quiere crear un usuario")
    this.router.navigate(['/crear-usuario']);
  }
  // Termino Boton restablecer constraseña
 

  // Validar Modelo
  validatorModelo(model:any)
  {

    for(var[key,value] of Object.entries(model))
    {
      if(value=="")
      {
        this.campoError= key;
        return false;
      }
    }
      return true;
  } // Cierre validar modelo 
  

// MENSAJE : DESPLIEGA MENSAJE DE ERROR MODO POPUP 
async mensajeToast(message:string, duration?:number)
{
 const toast = await this.toastController.create(
  {
    message:message,
    duration:duration?duration:2000
  }
 );
  toast.present()
}//cierre mensajeToast 


//VALIDAR USUARIO CON USUARIO DE PRUEBA 
validarUsuario(){
  let navigationExtras: NavigationExtras = {
    state:{
      miusuario: this.login
    }
  }
  if (this.login.usuario==this.USERVALIDO.user && this.login.password==this.USERVALIDO.pass 
      || this.login.usuario== this.USUARIONUEVO.user && this.login.password ==  this.USUARIONUEVO.pass )  
  {
    console.log("USUARIO VALIDADO CORRECTAMENTE")
    this.router.navigate(['/home'], navigationExtras)
  }

  
  else{
    console.log("NO SE PUDO VALIDAR USUARIO O PASSWORD")
    this.campoError="Usuario o contraseña incorrecta"
    this.mensajeToast("error: " + this.campoError);
  }

} // CIERRE VALIDACION DE USUARIO 



  // Boton restablecer constraseña
  btnRestablecer(){

    let navigationExtras:NavigationExtras = {
      state:{
        USERVALIDO: this.USERVALIDO
        
      }
    }
    
    console.log("Usted quiere restablecer la contrasena")
    console.log("se paso usuario valido " + this.USERVALIDO.user + " CLAVE VALIDA: " + this.USERVALIDO.pass)
    this.router.navigate(['/restablecer-pass'], navigationExtras ); 

   }
   // Termino Boton restablecer constraseña






}//cierre 

