import { Component, OnInit } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { 

    PNotifyButtons; // Initiate the module. Important!
    PNotify.alert({
      title: 'Ready',
      text: 'Welcome! This is test PNotify message.',
      animation: 'fade',
      icon: 'fa-home',
      addClass: 'alert alert-success border-success alert-styled alert-arrow-right',
      shadow: true,
      hide: true,
      delay: 1000 * 3,
      type: 'success'
    });

  }

  ngOnInit() {
  }

}
