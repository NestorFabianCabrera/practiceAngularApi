import { Component, OnInit } from '@angular/core';
import { CharacterSelectionService } from '../../services/character-selection.service';
import { Characters } from "../../interface";

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss']
})
export class CharacterModalComponent implements OnInit {
  character: Characters | null = null;

  constructor(private characterSelectionService: CharacterSelectionService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable para obtener el personaje seleccionado
    this.characterSelectionService.selectedCharacter$.subscribe(character  => {
      this.character = character;
    });
  }
}
