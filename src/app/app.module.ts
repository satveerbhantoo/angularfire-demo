import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
    apiKey: "AIzaSyBT9uUXinAPrCwovkvqj8VeZ0ah3zELgAY",
    authDomain: "starterapp-dca25.firebaseapp.com",
    databaseURL: "https://starterapp-dca25.firebaseio.com",
    projectId: "starterapp-dca25",
    storageBucket: "starterapp-dca25.appspot.com",
    messagingSenderId: "521215829063"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
