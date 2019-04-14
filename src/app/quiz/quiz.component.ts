import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
// import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
// import { Label } from "tns-core-modules/ui/label";

// import { Router } from "@angular/router";
// import { Page } from "tns-core-modules/ui/page";
// import { action, confirm, prompt, PromptOptions, PromptResult, inputType } from "tns-core-modules/ui/dialogs";
// import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";

import { Country } from '../services/quiz-text-generator';
import * as DatabaseHandler from '../database/database.handler';
import * as QuizTextGenerator from '../services/quiz-text-generator';
import * as QuizAnswerGenerator from '../services/quiz-answer-generator';


@Component({
  selector: "app-quiz",
  templateUrl: './app/quiz/quiz.component.html',
  styleUrls: ['./app/quiz/quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuizNumber = 1;
  private country: Country | undefined;
  quizText: string | undefined;
  answerSelections: Array<Country> = Array(4);
  // email = "nativescriptrocks@progress.com";
  // isLoggingIn = true;
  // htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';
  //
  // public webViewSrc: string = "https://docs.nativescript.org/";
  // public enabled: boolean = false;
  // @ViewChild("myWebView") webViewRef: ElementRef | undefined;
  // @ViewChild("labelResult") labelResultRef: ElementRef | undefined;

  // public isWebViewLoded = false;

  constructor(
    // private databaseHandler: DatabaseHandler,
    // private quizTextGenerator: QuizTextGenerator,
    // private quizAnswerGenerator: QuizAnswerGenerator
    // private router: Router,
    // private page: Page
  ) {
  }

  ngOnInit() {
    this.setQuizAndAnswerSelections();
    // this.page.actionBarHidden = true;
  }

  ngAfterViewInit() {
    // if (!this.webViewRef || !this.labelResultRef) return;
    //
    // let webview: WebView = this.webViewRef.nativeElement;
    // let label: Label = this.labelResultRef.nativeElement;
    // label.text = "WebView is still loading...";
    //
    // webview.on(WebView.loadFinishedEvent, (args: any) => {
    //   let message;
    //   if (!args.error) {
    //     message = "WebView finished loading of " + args.url;
    //     this.isWebViewLoded = true;
    //   } else {
    //     message = "Error loading " + args.url + ": " + args.error;
    //   }
    //
    //   label.text = message;
    //   console.log("WebView message - " + message);
    // });
  }

  private setQuizAndAnswerSelections(): void {
    const country = DatabaseHandler.getRandomCountry();
    this.quizText = QuizTextGenerator.countryToCapital(country);
    this.answerSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.countryToCapital(country));
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  // getQuizText(): string {
  //   if (!this.country) return '';
  //   return QuizTextGenerator.countryToCapital(this.country);
  // }
  //
  // getAnswerSelectionsTexts(): Array<any> {
  //   if (!this.country) return Array(4);
  //   return QuizAnswerGenerator.countryToCapital(this.country);
  // }

  // action() {
  //   // const options = {
  //   //   title: "Race selection",
  //   //   message: "Choose your race",
  //   //   cancelButtonText: "Cancel",
  //   //   actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
  //   // };
  //   //
  //   // action(options).then((result) => {
  //   //   console.log(result);
  //   // });
  //
  //   // let options = {
  //   //     title: "Race selection",
  //   //     message: "Are you sure you want to be a Unicorn?",
  //   //     okButtonText: "Yes",
  //   //     cancelButtonText: "No",
  //   //     neutralButtonText: "Cancel"
  //   // };
  //   //
  //   // confirm(options).then((result: boolean) => {
  //   //     console.log(result);
  //   // });
  //
  //   let options: PromptOptions = {
  //     title: "Hey There",
  //     defaultText: " Enter your mood ",
  //     message: "How you doin'",
  //     inputType: inputType.text,
  //     okButtonText: "OK",
  //     cancelButtonText: "Cancel",
  //     neutralButtonText: "Neutral",
  //     cancelable: true
  //   };
  //
  //   prompt(options).then((result: PromptResult) => {
  //     console.log("Hello, " + result.text);
  //   });
  //
  //   // let options = {
  //   //     title: "Race selection",
  //   //     message: "Race chosen: Unicorn",
  //   //     okButtonText: "OK"
  //   // };
  //   //
  //   // alert(options).then(() => {
  //   //     console.log("Race chosen!");
  //   // });
  // }

  // toggle() {
  //   // this.page.hasActionBar =
  //   // hasActionBar: true
  //   // effectiveWidth: -2
  //   // effectiveMarginLeft: 0
  //   // effectiveMarginRight: 0
  //   // effectiveHeight: -2
  //   // effectiveMarginTop: 0
  //   // effectiveMarginBottom: 0
  //
  //   // this.page.actionBarHidden = !this.page.actionBarHidden;
  //
  //   // this.page.backgroundSpanUnderStatusBar = !this.page.backgroundSpanUnderStatusBar;
  //
  //   // this.page.enableSwipeBackNavigation = !this.page.enableSwipeBackNavigation;
  //   // enableSwipeBackNavigation: true
  //   // isLayoutRequired: false
  //   // isLayoutRequested: false
  //   // col: 0
  //   // colSpan: 1
  //   // row: 0
  //   // rowSpan: 1
  //   // borderColor: undefined
  //   // borderTopColor: undefined
  //   // borderRightColor: undefined
  //   // borderBottomColor: undefined
  //   // borderLeftColor: undefined
  //   // borderWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // borderTopWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // borderRightWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // borderBottomWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // borderLeftWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // borderRadius: 0
  //   // borderTopLeftRadius: 0
  //   // borderTopRightRadius: 0
  //   // borderBottomRightRadius: 0
  //   // borderBottomLeftRadius: 0
  //   // color: undefined
  //   // background: undefined undefined undefined undefined
  //   // backgroundColor: undefined
  //   // backgroundImage: undefined
  //   // minWidth: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // minHeight: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // width: auto
  //   // height: auto
  //   // margin: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // marginLeft: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // marginTop: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // marginRight: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // marginBottom: {
  //   //   "value": 0,
  //   //   "unit": "px"
  //   // }
  //   // horizontalAlignment: stretch
  //   // verticalAlignment: stretch
  //   // visibility: visible
  //   // opacity: 1
  //   // rotate: 0
  //   // translateX: 0
  //   // translateY: 0
  //   // scaleX: 1
  //   // scaleY: 1
  //   // getMeasuredWidth: ()
  //   // getMeasuredHeight: ()
  //   // getActualSize: ()
  //   // automationText: undefined
  //   // originX: 0.5
  //   // originY: 0.5
  //   // iosOverflowSafeArea: true
  //   // iosOverflowSafeAreaEnabled: true
  //   // android: undefined
  //   // isLoaded: true
  //   // isCollapsed: false
  //   // effectiveMinWidth: 0
  //   // effectiveMinHeight: 0
  //   // effectivePaddingTop: 0
  //   // effectivePaddingRight: 0
  //   // effectivePaddingBottom: 0
  //   // effectivePaddingLeft: 0
  //   // effectiveBorderTopWidth: 0
  //   // effectiveBorderRightWidth: 0
  //   // effectiveBorderBottomWidth: 0
  //   // effectiveBorderLeftWidth: 0
  // }

  // onTakePhoto() {
  //   let isCameraAvailable = isAvailable();
  //   console.log(isCameraAvailable)
  //
  //   let options = {
  //     // width: this.width,
  //     // height: this.height,
  //     width: 300,
  //     height: 300,
  //     // keepAspectRatio: this.keepAspectRatio,
  //     // saveToGallery: this.saveToGallery
  //     keepAspectRatio: true,
  //     saveToGallery: true
  //   };
  //
  //   console.dir(this.page)
  //
  //   takePicture(options).then(imageAsset => {
  //       console.log(imageAsset)
  //       // this.imageTaken = imageAsset;
  //       // console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
  //     }).catch(err => {
  //     console.log(err);
  //   });
  // }

  // showActionBar() {
  //   this.page.actionBarHidden = !this.page.actionBarHidden;
  // }
  //
  // submit() {
  //   alert("You are using: " + this.email);
  // }
  //
  // goToList() {
  //   this.router.navigate(["/list", {
  //     foo: 'bar',
  //     fizz: 'buzz'
  //   }]);
  // }
  //
  // toggleDisplay() {
  //   this.isLoggingIn = !this.isLoggingIn;
  // }
}
