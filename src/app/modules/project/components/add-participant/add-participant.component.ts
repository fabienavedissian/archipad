import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddParticipant } from '../../interfaces/add-participant.interface';
import { ProjectParticipant } from '../../interfaces/project.interface';
import { ProjectParticipantService } from '../../services/project-participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent {

  public title: string = '';
  public selected: string;
  public dataSource$: Promise<ProjectParticipant[]>;
  private project: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddParticipant,
    public dialog: MatDialog,
    public projectParticipantService: ProjectParticipantService
  ) {
    this.title = data.title;
    this.dataSource$ = data.dataSource$;
    this.project = data.project;
    this.dataSource$.then((projectParticipant: ProjectParticipant[]) => {
      this.selected = projectParticipant[0].name;
    });
  }

  onClickAdd(): void {
    this.dataSource$.then((projectParticipant: ProjectParticipant[]) => {
      this.projectParticipantService[this.project] = new Promise<ProjectParticipant[]>((resolve, reject) => {
        this.projectParticipantService.addParticipant(projectParticipant[projectParticipant.findIndex(o => o.name === this.selected)], this.project);
        this.dialog.closeAll();
      });
    });
  }

}
