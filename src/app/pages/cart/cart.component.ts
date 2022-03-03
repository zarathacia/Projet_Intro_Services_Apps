import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import  jspdf from 'jspdf';
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
  generatePDF(){
    var element: any = document.getElementById('card')
    html2canvas(element).then((canvas)=>{
      console.log(canvas)

      var imageData= canvas.toDataURL('image/png')

      var doc = new jspdf();
      doc.addImage(imageData,0,0,208,500)
      doc.save('image.pdf')



    })
  }
}