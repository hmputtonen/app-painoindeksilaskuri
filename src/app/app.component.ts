import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pituus : number;
  paino : number;
  painoindeksi : number;
  virhe : string;

  laskePainoindeksi = () : number => {


    if(this.pituus >= 100 && this.pituus <= 230 && this.paino >= 30 && this.paino <= 230){

      
    let laskettuPainoindeksi = (this.paino/((this.pituus/100)*(this.pituus/100))).toFixed(2);
    this.painoindeksi = Number(laskettuPainoindeksi);
    this.painoindeksi;
  
    this.virhe = null;
    return this.painoindeksi;
      

    } else {

      this.painoindeksi = null;
      this.virhe = "Syöttötiedoissa virhe. Käytä ainoastaan numeerisia arvoja väliltä 100-230 (pituus) ja 30-230 (paino)";
    
    }
  }

}
