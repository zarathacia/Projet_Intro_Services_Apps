import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/Services/ItemService';
@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  itemId:any;
  Item:any;
  constructor(private route: ActivatedRoute,private itemService:ItemService ){}
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.itemId = params.get('ItemId');
    });
    this.getproductById(this.itemId);
  }
  getproductById(ItemId:any){
    this.itemService.getItemById(ItemId).subscribe((res)=>{
      this.Item = res;
    });
    console.log(this.Item);
  }
}