import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

//containers
import { HomeComponent } from "./containers/home/home.component";

//components
import { NumbersComponent } from "./components/numbers/numbers.component";
import { LettersComponent } from "./components/letters/letters.component";
import { LanguagesComponent } from "./components/languages/languages.component";
import { KpopComponent } from "./components/kpop/kpop.component";

// routes
export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "numbers",
    component: NumbersComponent
  },
  {
    path: "letters",
    component: LettersComponent
  },
  {
    path: "languages",
    component: LanguagesComponent
  },
  {
    path: "kpop",
    component: KpopComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumbersComponent,
    LettersComponent,
    LanguagesComponent,
    KpopComponent
  ],

  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
