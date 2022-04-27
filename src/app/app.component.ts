import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reuben-tudball';
  isUnderscoreVisible: boolean = true;
  public innerWidth: any;

  ngOnInit(){
    this.innerWidth = window.innerWidth;
  }


  startTimer(){
    setInterval(() => {
      if(this.isUnderscoreVisible){
        this.isUnderscoreVisible = false;
      } else{
        this.isUnderscoreVisible = true;
      }
    },2000);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.innerWidth = window.innerWidth;
  }

}
