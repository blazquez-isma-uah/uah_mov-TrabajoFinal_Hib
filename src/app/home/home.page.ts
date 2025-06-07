import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonRadioGroup, 
  IonRadio, IonRange, IonButton, IonText,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonRadioGroup,
    IonRadio, IonRange, IonButton, IonText, FormsModule, NgIf],
})
export class HomePage {
  total = 0;
  personas = 1;
  propina = 0;
  customTip = false;
  resultado = 0;

  calcular() {
    const totalConPropina = this.total + (this.total * this.propina / 100);
    this.resultado = totalConPropina / this.personas;
  }

  activarPropinaPersonalizada() {
    this.customTip = true;
    this.propina = 0;
  }

  volverARadio() {
    this.customTip = false;
    this.propina = 0; 
  }

}
