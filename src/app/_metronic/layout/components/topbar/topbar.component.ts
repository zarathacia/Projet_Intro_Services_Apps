import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';

  public totalItem :number =0 ;
  constructor(private layout: LayoutService,private cartService: CartService) {}

  ngOnInit(): void {
    this.headerLeft = this.layout.getProp('header.left') as string;
    this.cartService.getProduct()
    .subscribe(res =>{
      this.totalItem=res.length;
    })

  }
}
