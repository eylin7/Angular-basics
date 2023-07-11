import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page-components.html',
})
export class MainDbzPages {

  constructor(private dbzService : DbzService){}

  get characters(): Character[] {
   return [...this.dbzService.character];
  }
  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterById(id);

  }
  onNewCharacter(character: Character):void{
 this.dbzService.addCharacter(character)

  }

}
