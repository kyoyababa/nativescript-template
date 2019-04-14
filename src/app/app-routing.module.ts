import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  // TODO(baba): 暫定的にquizに飛ばしている
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
  { path: "list", loadChildren: "~/app/list/list.module#ListModule" },
  { path: "quiz", loadChildren: "~/app/quiz/quiz.module#QuizModule" }
];


@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
