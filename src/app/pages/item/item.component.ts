import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';
import items from './file/items.json'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  public productList :any;
  constructor(private api: ApiService,private cartService: CartService) {}
  formatDescription(desc:any)
  {
    return  desc.slice(0,31)+"... "
  }
  //itemList:{ ItemId:number ,ItemName:String,ImageUrl:string,Price:number,Description:string,Provider:string,Reference : string,Disponibilité :string,Type1:string,Type2:string }[]=items;
  ngOnInit():void{
    this.api.getProduct()
    .subscribe(res=>{
      
      this.productList = res;
      console.log(this.productList);

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
      
    })
  }
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }
} 
