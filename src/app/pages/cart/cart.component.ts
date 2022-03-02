import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import * as jspdf from 'jspdf';
import html2canvas  from 'html2canvas';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public products :any=[];
  public grandTotal !:number ;
  constructor(private cartService:CartService) { }
  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res =>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice()
    
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  
}