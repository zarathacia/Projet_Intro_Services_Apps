import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
const providers = [ {name:'EL KHADHRA',descrip:'Distribution des Produits Agricoles' ,adresse:'Monastir, Tunisie',email:'ste.khadra@topnet.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925',imglink:'./assets/media/logos/elkhadhralogo.png' },
                    {name:'societe2',descrip:'noice' ,adresse:'Tunis, Tunisie',email:'elmen@sibcol.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925', imglink:'./assets/media/logos/elkhadhralogo.png'},
                    {name:'provider3',descrip:'descrip3' ,adresse:'location',email:'mail3', web:'web3' ,tel:'tel3' ,imglink:'./assets/media/logos/elkhadhralogo.png'},]

@Component({
  selector: 'app-tables-widget12',
  templateUrl: './tables-widget12.component.html',
})
export class TablesWidget12Component implements OnInit {
  providers=providers;
  constructor() {}

  ngOnInit(): void {}
}
