import { Component } from '@angular/core';
import { ProjectParticipantService } from './services/project-participant.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  public displayedColumns: string[] = ['email', 'name', 'company', 'state', 'role'];

  constructor(public projectParticipantService: ProjectParticipantService) {
    projectParticipantService.listParticipant$ = projectParticipantService.getParticipants();
    projectParticipantService.ownerProject$ = projectParticipantService.getParticipants('owner');
  }

}
