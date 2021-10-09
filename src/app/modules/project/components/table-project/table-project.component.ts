import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ProjectParticipant } from '../../interfaces/project.interface';
import { AddParticipantComponent } from '../add-participant/add-participant.component';

@Component({
  selector: 'app-table-project',
  templateUrl: './table-project.component.html',
  styleUrls: ['./table-project.component.scss']
})
export class TableProjectComponent implements OnInit {

  @Input() title: string = '';
  @Input() dataSource$: Promise<ProjectParticipant[]> | BehaviorSubject<ProjectParticipant[]> = new BehaviorSubject([]);
  @Input() displayedColumns: string[] = [];
  @Input() add: boolean = false;
  @Input() list$: Promise<ProjectParticipant[]> | BehaviorSubject<ProjectParticipant[]> = new BehaviorSubject([]);
  @Input() color: string = 'blue';
  @Input() project: string = '';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onClickAdd(): void {
    this.dialog.open(AddParticipantComponent, {
      data: {
        title: this.title,
        dataSource$: this.list$,
        project: this.project
      }
    });
  }

}
