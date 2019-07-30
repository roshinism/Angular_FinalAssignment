import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/service/all-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allProducts:any

  constructor(private productService:AllServiceService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts =function()
  {
    this.productService.getAllProducts().subscribe((response)=>{
      console.log(response)
      this.allProducts = response
    })
  }

}
