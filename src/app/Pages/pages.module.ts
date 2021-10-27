import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../Config/firebase.config';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAuth } from '@angular/fire/auth';
import { getFirestore } from 'firebase/firestore';
import { getRemoteConfig } from 'firebase/remote-config';
import { provideFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig } from '@angular/fire/remote-config';
import { AuthService } from '../Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CheckoutProductsComponent } from '../Components/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from '../Components/checkout-subtotal/checkout-subtotal.component';
import { BannerComponent } from '../Components/banner/banner.component';
import { ProductsComponent } from '../Components/products/products.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CheckoutComponent,
    BannerComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService, AuthService
  ],
})
export class PagesModule { }
