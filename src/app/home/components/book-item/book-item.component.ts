import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonThumbnail, IonicModule } from '@ionic/angular';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { BookItem } from 'src/app/models';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  // imports: [
  //   CommonModule,
  //   IonicModule,
  //   IonCard,
  //   IonCardHeader,
  //   IonCardContent,
  //   IonCardSubtitle,
  // ],
  // standalone: true
})
export class BookItemComponent {
  @Input() book: BookItem | null = null; // Input property to receive BookItem object

  constructor() { }

}
