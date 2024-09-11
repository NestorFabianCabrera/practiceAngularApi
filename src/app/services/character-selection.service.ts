import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Characters } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterSelectionService {
  private selectedCharacterSource = new BehaviorSubject<Characters | null>(null);
  selectedCharacter$ = this.selectedCharacterSource.asObservable();

  setSelectedCharacter(character: Characters) {
    this.selectedCharacterSource.next(character);
  }
}
