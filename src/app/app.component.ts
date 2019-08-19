import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectA7';
  loadedFeature = 'recipe';

  constructor(){
        console.log('constructure');
  }

  ngOnInit(){
        console.log('ngoninit');
  }

  onNavigate(event: string){
     this.loadedFeature=event;
  }
}

