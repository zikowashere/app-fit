import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from'@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentComponent } from './training/current/current.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { appRouting } from './app-routing';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepicker, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule, MatOptionModule, MatSelectModule, MatProgressBarModule } from '@angular/material';
import{ FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { ListComponent } from './navigation/list/list.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { FitnessComponent } from './fitness/fitness.component';
import { CardioComponent } from './cardio/cardio.component';
import { ListExoComponent } from './list-exo/list-exo.component';
import { ChestComponent } from './list-exo/chest/chest.component';
import { EpauleComponent } from './list-exo/epaule/epaule.component';
import { BackComponent } from './list-exo/back/back.component';
import { AppValidation } from './appValidation.Service';
import { TimerComponent } from './timer/timer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



export const firebaseConfig = {
  apiKey: 'AIzaSyBna0JoMDF5j2FcserZLeJFB1Q4DwLHs8U',
  authDomain: 'daouma-test.firebaseapp.com',
  databaseURL: 'https://daouma-test.firebaseio.com',
  projectId: "daouma-test",
  storageBucket: 'daouma-test.appspot.com',
  messagingSenderId: '113865914132'
};

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    TrainingComponent,
    CurrentComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    ListComponent,
    FitnessComponent,
    CardioComponent,
    ListExoComponent,
    ChestComponent,
    EpauleComponent,
    BackComponent,
    TimerComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    appRouting,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    YoutubePlayerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule ,
    RouterModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [AppValidation],
  bootstrap: [AppComponent]
})
export class AppModule { }

