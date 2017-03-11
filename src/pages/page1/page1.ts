import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { ConfigPage } from '../config/config';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  selectedItem: any;
  arrayNombres: string[];
  arrayMacs: string[];
  arrayImagenes: string[];
  items: Array<{nombre: string, mac: string, imagenes: string}>;

  constructor(public navCtrl: NavController) {
    //this.selectedItem = navParams.get('item');
    this.arrayNombres = ['Paco PC', 'Paco Movil', 'jaja Paco te he robao el wifi'];
    this.arrayMacs = ['00-14-22-01-23-45', '00-14-22-01-23-45', '00-14-22-01-23-47'];
    this.arrayImagenes = ['../assets/img/pc.png', '../assets/img/movil.png', '../assets/img/pc.png'];

    this.items = [];
    for (let i = 0; i < this.arrayImagenes.length; i++) {
      this.items.push({
        nombre: this.arrayNombres[i],
        mac: this.arrayMacs[i],
        imagenes: this.arrayImagenes[i]
      });
    }


  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });

  }
  toConfig(){
    this.navCtrl.push(ConfigPage, {

    });
  }

}
