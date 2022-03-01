import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/Services/supplier.service';

const providers = [ {name:'EL KHADHRA',descrip:'Distribution des Produits Agricoles' ,type:'PESTICIDES', adresse:'Monastir, Tunisie',email:'ste.khadra@topnet.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925',imglink:'./assets/media/logos/elkhadhralogo.png', rating:5 },
                    {name:'societe2',descrip:'noice' ,type:'SEEDS',adresse:'Tunis, Tunisie',email:'elmen@sibcol.tn', web:'www.elkhadra.tn' ,tel:'(+216) 73 462 925', imglink:'./assets/media/logos/elkhadhralogo.png',  rating:4},
                    {name:'provider3',descrip:'descrip3' ,type:'PESTICIDES',adresse:'location',email:'mail3', web:'web3' ,tel:'tel3' ,imglink:'./assets/media/logos/elkhadhralogo.png' ,rating:3},
                  ]

                    
@Component({
  selector: 'app-provider-list', 
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  provider: any =[]
  providers=providers;
  k=5;
  constructor(private supplierService:SupplierService) { 
    
  }

  ngOnInit(): void {
  
    this.provider=this.supplierService.getSuppliers()
    .subscribe(res=>{
      
      this.provider=res;
      console.log(this.provider);

      })
    
    
  }
  counter(i: number) {
    return new Array(i);
}
}
