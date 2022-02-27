import { Component, OnInit } from '@angular/core';

const details = [ {name:'EL KHADHRA',descrip:'Distribution des Produits Agricoles' ,adresse:'Monastir, Tunisie',email:'ste.khadra@topnet.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925' },]
@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {
  details= details;
  constructor() { }

  ngOnInit(): void {
  }

}
