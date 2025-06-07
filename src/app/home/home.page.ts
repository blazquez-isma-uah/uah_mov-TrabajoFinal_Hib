import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonRadioGroup, 
  IonRadio, IonRange, IonButton, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, 
  IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonRadioGroup,
    IonRadio, IonRange, IonButton, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, 
    IonGrid, IonRow, IonCol,
    FormsModule, NgIf],
})
export class HomePage {
  total = 0; // Importe total de la cuenta
  personas = 1; // Número de personas que comparten la cuenta
  radioSeleccionado = 0; // Propina seleccionada desde los radio buttons
  propina = 0; // Propina final a aplicar
  resultado = 0; // Resultado del cálculo final por persona
  mostrarResultado = false; // Controla si se muestra el resultado

  usarSliderPropina = false; // Controla si se esta usando el slider para la propina o los radio buttons

  // Sincronización de los radio buttons y el slider
  actualizarDesdeRadio(valor: number) {
    this.usarSliderPropina = false;
    this.radioSeleccionado = valor;
    this.propina = valor;
  }

  // Actualiza la propina desde el slider
  actualizarDesdeSlider(valor: any) {
    this.usarSliderPropina = true;
    this.propina = Number(valor);
    this.radioSeleccionado = 0; // Resetea el radio seleccionado
  }

  // Realiza el cálculo del total por persona incluyendo la propina
  calcular() {
    const totalConPropina = this.total + (this.total * this.propina / 100);
    this.resultado = this.personas > 0 ? totalConPropina / this.personas : 0;
    this.mostrarResultado = true;
  }

  // Reinicia todos los valores a sus estados iniciales
  reiniciar() {
    this.total = 0;
    this.personas = 1;
    this.radioSeleccionado = 0;
    this.propina = 0;
    this.resultado = 0;
    this.mostrarResultado = false;
    this.usarSliderPropina = false;
  }

}
