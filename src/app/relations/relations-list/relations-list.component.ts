import { Component, OnInit, OnDestroy } from '@angular/core';
import { RelationsService } from '../relations.service';
import { Relation } from '../relation.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-relations-list',
  templateUrl: './relations-list.component.html',
  styleUrls: ['./relations-list.component.css']
})
export class RelationsListComponent implements OnInit, OnDestroy {

  relations: Relation[];
  subscribtion: Subscription;

  constructor(private relationsService: RelationsService) { }

  ngOnInit() {
    this.relations = this.relationsService.getAllRelations();
    this.subscribtion = this.relationsService
      .relationsChanged.subscribe(
        (relationsList: Relation[]) => {
          this.relations = relationsList;
        }
      );
  }

  onEditRelation(relationIndex: number) {
    this.relationsService.relationsEditing.next(relationIndex);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
