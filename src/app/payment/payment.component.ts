import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../payment.service";
import {Payment} from "../model/payment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  errorMessage: string;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }


  confirm(){
      const payment = this.createPayment();
      this.paymentService.create(payment).subscribe(res => {
        alert("payment is saved !");
      }, error => {
        console.log(error);
        //this.isLoading = false;
        //this.isError = true;
        if (error.status === 404) {
          //alert("404");
          this.errorMessage = error.error + " " + error.status;
        } else if (error.status === 409) {
          this.errorMessage =  error.error + " " + error.status;
          //alert("409");
        } else {
          //alert("other error");
          //this.errorMessage = error.statusText;
          if (error.status === 0){
            this.errorMessage = " the server is down";
          }else if (error.status === 500){
            this.errorMessage = error.error.error + " - " + error.error.message  + " - " +  error.error.status;
          }
        }

      });


  }

  private createPayment() {
    const payment = new Payment();
    payment.idCommande = 3;
    payment.montant = 100;
    payment.numeroCarte = 723456;
    return payment;
  }

}
