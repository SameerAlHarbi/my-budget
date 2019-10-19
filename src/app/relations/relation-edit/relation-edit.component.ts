import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RelationsService } from '../relations.service';
import { Relation } from '../relation.model';

@Component({
  selector: 'app-relation-edit',
  templateUrl: './relation-edit.component.html',
  styleUrls: ['./relation-edit.component.css']
})
export class RelationEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) relationsForm: NgForm;
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;

  editMode = false;
  editingItemIndex: number;
  editingItem: Relation;
  subscription: Subscription;


  constructor(private relationsService: RelationsService) { }

  ngOnInit() {
    this.subscription = this.relationsService.relationsEditing
        .subscribe(
          (index: number) => {
            this.editMode = true;
            this.editingItemIndex = index;
            this.editingItem = this.relationsService
                .findRelationByIndex(index);
            this.relationsForm.setValue({
              code: this.editingItem.code ,
              name: this.editingItem.name
            });
            this.nameInput.nativeElement.focus();
          });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRelation = new Relation(value.code, value.name);
    if (this.editMode) {
      this.relationsService.updateRelation(newRelation);
    } else {
      this.relationsService.addNewRelation(newRelation);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.relationsService.deleteRelation(this.editingItem.code);
    this.onClear();
  }

  onClear() {
    this.relationsForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
