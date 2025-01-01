import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { BookItem } from '../models'

import { select, Store } from '@ngrx/store';
import { loadBooks, clearBooks } from './store/home.actions';
import { Observable } from 'rxjs';
import { HomeState, selectBooks } from './store';
import { selectIsFetching } from '../store';
import { AppState } from '../store/app.reducer';
import { ScriptService } from '../services/script/script.service';
import { WindowRef } from '../utils/windowsRef';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  page = 0
  isFetching = false
  books$: Observable<BookItem[]>
  isFetching$: Observable<boolean>;

  constructor(private appStore: Store<AppState>, private store: Store<HomeState>, private scriptService: ScriptService, private renderer: Renderer2, private windowRef: WindowRef) {
    this.books$ = this.store.select(selectBooks);
    this.isFetching$ = this.appStore.select(selectIsFetching)
  }
  
  ngOnInit(): void {
    console.log("OnInit")
    this.scriptService.loadJsScript(this.renderer, 
      'http://localhost:4200/assets/js/script.js', this.initEmbeddedMessaging.bind(this));

    // this.scriptService.loadJsScript(this.renderer, 
    //   'https://manulife-vietnam--vnccs2.sandbox.my.site.com/ESWPOCChatBotEmbeddedS1723178841887/assets/js/bootstrap.min.js', this.initEmbeddedMessaging.bind(this));
      // 'lib/js/jquery.min.js', this.initEmbeddedMessaging.bind(this));

    // 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', this.initEmbeddedMessaging.bind(this)
    // lib/js/jquery.min.js



    // this.isFetching$.subscribe(value => this.isFetching = value)
    // this.loadMoreBooks()
  }

  initEmbeddedMessaging(): void {
    // Your initialization code here
    console.log('Embedded messaging initialized', this.windowRef.nativeWindow);

    this.windowRef.nativeWindow.showAlert();

    // this.windowRef.nativeWindow.embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
    // this.windowRef.nativeWindow.embeddedservice_bootstrap.settings.needQueuePosition = 1;
    // this.windowRef.nativeWindow.embeddedservice_bootstrap.init(
    //   '00D0p0000002OHx',
    //   'POC_ChatBot_Embedded_Service',
    //   'https://manulife-vietnam--vnccs2.sandbox.my.site.com/ESWPOCChatBotEmbeddedS1723178841887',
    //   {
    //     scrt2URL: 'https://manulife-vietnam--vnccs2.sandbox.my.salesforce-scrt.com'
    //   }
    // );

    console.log("done")
  }

  // refresh(ev: any) {
  //   this.page = 0;
  //   this.store.dispatch(clearBooks());
  //   this.store.dispatch(loadBooks({page: this.page}));
  //   this.page ++;
  //   (ev as RefresherCustomEvent).detail.complete();
  // }

  // loadMoreBooks(ev?: any) {
  //   console.log("loadMoreBooks")
  //   setTimeout(() => {
  //     if (this.isFetching == true) return
  //     this.store.dispatch(loadBooks({page: this.page}))
  //     this.page ++
  //     ev?.target?.complete();
  //   }, 500)
  // }
}
