import { Component } from '@angular/core';
import items from './file/items.json'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor() {}
  itemList:{ ItemId:number ,ItemName:String,ImageUrl:string,Price:number,Description:string,Provider:string,Reference : string,Disponibilité :string,Type1:string,Type2:string }[]=items;
} 
