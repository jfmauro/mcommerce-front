import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {PaymentComponent} from "./payment/payment.component";



export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'payment', component: PaymentComponent }
];
