// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './project-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENTS
import { ProjectComponent } from './project.component';
import { TableProjectComponent } from './components/table-project/table-project.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';

// SERVICES
import { ProjectParticipantService } from './services/project-participant.service';

// PIPES
import { RolePipe } from './pipe/role.pipe';


@NgModule({
  declarations: [
    ProjectComponent,
    TableProjectComponent,
    AddParticipantComponent,
    RolePipe,
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    SharedModule,
  ],
  providers: [
    ProjectParticipantService
  ]
})
export class ProjectModule { }
