import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isLight: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.documentElement.style.setProperty("--slider-color", "white");
    document.documentElement.style.setProperty("--card-bg-color", "rgba(0, 0, 0, 0.7)"); 
    document.documentElement.style.setProperty("--card-title-color", "white");   
}

  toggleTheme() {
    this.isLight = !this.isLight;
    
    switch (this.isLight) {
      case true:
        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--title-color", "rgba(0, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--title-effect-color1", "#222");
        document.documentElement.style.setProperty("--slider-color", "white");
        document.documentElement.style.setProperty("--card-bg-color", "rgba(0, 0, 0, 0.7)"); 
        document.documentElement.style.setProperty("--card-title-color", "white");   
        break;
      case false:
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--title-color", "white");
        document.documentElement.style.setProperty("--slider-color", "black");
        document.documentElement.style.setProperty("--card-bg-color", "rgba(255, 255, 255, 0.7)"); 
        document.documentElement.style.setProperty("--card-title-color", "black");   
        break;
    }
  }

  redirect(event: string){
    switch(event){
      case 'numbers': 
        this.router.navigate(['numbers']);
        break;
      case 'letters': 
        this.router.navigate(['letters']);
        break;
      case 'languages': 
        this.router.navigate(['languages']);
        break;
      case 'kpop': 
        this.router.navigate(['kpop']);
        break;
    }
  }
}
