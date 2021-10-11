// MODULES
import { ShareRoutingModule } from './project-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// COMPONENTS
import { ProjectComponent } from './project.component';
import { TableProjectComponent } from './components/table-project/table-project.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';

// SERVICES
import { ProjectParticipantService } from './services/project-participant.service';

// PIPES
import { RolePipe } from './pipe/role.pipe';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ShareRoutingModule,
        SharedModule,
      ],
      declarations: [
        ProjectComponent,
        TableProjectComponent,
        AddParticipantComponent,
        RolePipe,
      ],
      providers: [
        ProjectParticipantService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
