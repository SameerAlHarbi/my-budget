import { Injectable } from '@angular/core';
import { Relation } from './relation.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelationsService {

  relations: Relation[] = [
    new Relation('0000', 'Brother'),
    new Relation('0001', 'Sister'),
    new Relation('0002', 'Frind'),
    new Relation('0003', 'Father'),
    new Relation('0004', 'Mother'),
  ];

  relationsChanged = new Subject<Relation[]>();
  relationsEditing = new Subject<number>();

  constructor() { }

  getAllRelations(): Relation[] {
    return this.relations.slice();
  }

  findRelationByCode(relationCode: string) {
    return this.relations.find(r => r.code === relationCode);
  }

  findRelationByName(relationName: string) {
    return this.relations.find(r => r.code === relationName);
  }

  findRelationByIndex(relationIndex: number) {
    return this.relations[relationIndex];
  }

  addNewRelation(newRelation: Relation) {
    this.relations.push(newRelation);
    this.relationsChanged.next(this.getAllRelations());
  }

  updateRelation(newRelation: Relation) {
    const currentRelation = this.findRelationByCode(newRelation.code);
    if (currentRelation) {
      currentRelation.name = newRelation.name;
    }
    this.relationsChanged.next(this.getAllRelations());
  }

  deleteRelation(relationCode: string) {
    const currentRelation = this.findRelationByCode(relationCode);
    const index = this.relations.indexOf(currentRelation);
    this.relations.splice(index, 1);
    this.relationsChanged.next(this.getAllRelations());
  }

}
