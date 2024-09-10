import { Component, OnInit } from '@angular/core';
import {ApiService, data} from '../../services/api.service';
import { Characters } from "../../interface";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {


  characters : Characters[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getData().subscribe((result: data) => {
      this.characters = result.items;
    })
  }
}
