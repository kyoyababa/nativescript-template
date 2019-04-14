import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import { DatabaseHandler } from "../database/database.handler";
// import { QuizTextGenerator } from "../services/quiz-text-generator";
// import { QuizAnswerGenerator } from "../services/quiz-answer-generator";
import { QuizRoutingModule } from "./quiz-routing.module";
import { QuizComponent } from "./quiz.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    QuizRoutingModule
  ],
  providers: [
  //   DatabaseHandler,
  //   QuizTextGenerator,
  //   QuizAnswerGenerator
  ],
  declarations: [
    QuizComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class QuizModule { }
