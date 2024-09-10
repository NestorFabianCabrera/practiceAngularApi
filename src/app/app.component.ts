import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  name! : string;
  title : string = 'Simio - Practice Angular';
  cities: string[] = ['Medellin', 'Bucaramanga', 'Cucuta'];


  optionButton: boolean = false;

  toggleComponent(event: any): void {
    this.optionButton = event.target.checked;
  }

}
