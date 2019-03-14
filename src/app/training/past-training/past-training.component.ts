import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  calculcalorie;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgModel){
    if(parseInt(form.value.âge)<0||parseInt(form.value.taille)<150||parseInt(form.value.poids)<15)
    this.calculcalorie=0
    else if(form.value.sexe!='femme'){
      console.log(form.value.sexe)
      this.calculcalorie= 9.99*parseFloat(form.value.poids)+(6.25*parseFloat(form.value.taille))+(5*parseFloat(form.value.âge))-5;
    }else
    this.calculcalorie= 9.99*parseFloat (form.value.poids)+6.25*parseFloat(form.value.taille)+5*parseFloat(form.value.âge)-161;
  }
  displayCalcul(){
    return this.calculcalorie
  }
  
}
