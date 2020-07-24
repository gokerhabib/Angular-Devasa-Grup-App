import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
})
export class ContactComponent implements OnInit {
  loading:boolean=false;
  nameFormControl:FormControl = new FormControl();
  emailFormControl:FormControl = new FormControl();
  buttonText:string="Gönder";
  constructor() { }

  ngOnInit() {
    this.nameFormControl

  }
  REGİSTER(){
    this.loading = true;
    this.buttonText="Gönderiliyor";
    let user = {
      name:this.nameFormControl.value,
      email:this.emailFormControl.value
    }
  }
}
