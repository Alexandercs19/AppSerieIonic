import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-about-it',
  templateUrl: './about-it.page.html',
  styleUrls: ['./about-it.page.scss'],
})
export class AboutItPage implements OnInit {

@ViewChild(IonContent) content: IonContent;
  constructor() { }

  scrollToBottom() {

    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    
    this.content.scrollToTop(500);
  }
  ngOnInit() {
  }

}
