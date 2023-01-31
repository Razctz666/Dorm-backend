import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prices } from '../../../app/prices';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices: Prices;

  priceDetails = new FormGroup({
    girls: new FormControl('',[Validators.required]),
    boys: new FormControl('',[Validators.required]),
    foodPackage: new FormControl('',[Validators.required]),
    electricityBillPerUnit: new FormControl('',[Validators.required]),
    securityDeposit: new FormControl('',[Validators.required])
  });

  constructor(private adminService: AdminService) {
    this.adminService.findHostelPriceDetails().subscribe((hostelPriceDetail) => {
      this.prices = hostelPriceDetail;
      this.setValue(hostelPriceDetail);
    });
    this.priceDetails.get('girls')!.disable();
    this.priceDetails.get('boys')!.disable();
    this.priceDetails.get('foodPackage')!.disable();
    this.priceDetails.get('electricityBillPerUnit')!.disable();
    this.priceDetails.get('securityDeposit')!.disable();
  }

  setValue(price: Prices) {
    this.priceDetails.controls['girls'].setValue(price.girls);
    this.priceDetails.controls['boys'].setValue(price.boys);
    this.priceDetails.controls['foodPackage'].setValue(price.foodPackage);
    this.priceDetails.controls['electricityBillPerUnit'].setValue(price.electricityBillPerUnit);
    this.priceDetails.controls['securityDeposit'].setValue(price.securityDeposit);
  }

  updatePriceDetails() {
    if(this.priceDetails.status == "INVALID") { 
      alert('Please Enter Valiad Value !');
      return; 
    }
    const price = this.priceDetails.getRawValue();
    // console.log(price);
    this.adminService.updatePriceDetails(price)
    .subscribe((msg) => {
        alert(msg);
    }
    );
  }

  ngOnInit(): void {
    
  }

}
