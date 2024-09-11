import { Component, OnInit } from '@angular/core';
import {ApiService, data} from '../../services/api.service';
import { Characters } from "../../interface";
import { MatDialog } from '@angular/material/dialog';
import { CharacterSelectionService } from '../../services/character-selection.service';
import { CharacterModalComponent } from '../character-modal/character-modal.component'; // El componente del modal

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  characters: Characters[] = [];

  constructor(
    private apiService: ApiService,
    private characterSelectionService: CharacterSelectionService,
    public dialog: MatDialog // Angular Material para el modal
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getData().subscribe((result: data) => {
      this.characters = result.items;
    });
  }

  onCharacterClick(character: Characters): void {
    this.characterSelectionService.setSelectedCharacter(character); // Almaceno aquí el personaje al que le di click
    this.openModal(); // Abro el modal
  }

  openModal(): void {
    this.dialog.open(CharacterModalComponent, {
      panelClass: `custom-dialog-container`
    });
  }

  kiDesconocido(character: Characters): void{
    if (character.ki === 'unknown'){
      character.ki = 'Desconocido';
    }
  }


}
