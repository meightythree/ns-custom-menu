import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { WebViewExt } from "@nota/nativescript-webview-ext";
import { fromEvent, Subject } from "rxjs";
import { WEBVIEW_SRC } from "./index-html";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("webViewExt") webViewExt: ElementRef<WebViewExt>;
  WEBVIEW_SRC = WEBVIEW_SRC;
  private unsub = new Subject();

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.unsub.next(null);
    this.unsub.complete();
  }

  init(): void {}

  executeJS(): void {
    this.webViewExt.nativeElement.executeJavaScript("console.log('AMAZING');");
  }
}
