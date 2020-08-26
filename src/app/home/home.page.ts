import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private email: string;
  private sexo: string;
  private userPass: string;
  private userPassVer: string;

  constructor() {}

  /**
   * guardar
   */
  public guardar(): void {
    if (this.userPass == this.userPassVer){
     alert('Se hizo click \n Los datos ingresados son:\n email: ' + this.email + '\n sexo:' + this.sexo);
    }
    else{
      alert('Las Contrasenas no coinciden');
    }
  }
}
