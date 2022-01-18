import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Payment} from "./model/payment";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + '/paiement';
  }

  create(payment: Payment) {
    return <Observable<Payment>> this.http.post(this.url, payment);
  }
}
