import {Component} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  /*name! : string;
  title : string = 'Simio - Practice Angular';
  cities: string[] = ['Medellin', 'Bucaramanga', 'Cucuta'];*/


  optionButton: boolean = false;

  toggleComponent(event: MatCheckboxChange): void {
    this.optionButton = event.checked;
    console.log(this.optionButton);
  }

}
