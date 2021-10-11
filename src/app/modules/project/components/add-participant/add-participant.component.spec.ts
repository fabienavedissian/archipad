// MODULES
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

// ENUM
import { ParticipantInvitationState, ParticipantRole } from '../../enum/participant.enum';

// INTERFACES
import { AddParticipant } from '../../interfaces/add-participant.interface';
import { ProjectParticipant } from '../../interfaces/project.interface';

// SERVICES
import { ProjectParticipantService } from '../../services/project-participant.service';

// COMPONENTS
import { AddParticipantComponent } from './add-participant.component';

describe('AddParticipantComponent', () => {
  let component: AddParticipantComponent;
  let fixture: ComponentFixture<AddParticipantComponent>;
  let data: AddParticipant = {
    title: "Ajout d'un projet partagé avec",
    dataSource$: new Promise<ProjectParticipant[]>((resolve, reject) => {
      return resolve([
          {
            email: "thomas@bigsool.com",
            name: "Thomas Dubois",
            company: "Bigsool",
            function: "Maitre d'oeuvre",
            projectId: 34567,
            role: ParticipantRole.OWNER,
            state: ParticipantInvitationState.ACTIVE
        },
        {
            email: "florian@bigsool.com",
            name: "Florian Girardey",
            company: "Bigsool",
            function: "Maitre d'oeuvre",
            projectId: 34567,
            role: ParticipantRole.COLLABORATOR,
            state: ParticipantInvitationState.ACTIVE
        },
      ])
    }),
    project: "participantProject$"
  };
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ],
      declarations: [
        AddParticipantComponent
      ],
      providers: [
        ProjectParticipantService,
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: mockDialogRef },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog when close button clicked', () => {
    mockDialogRef.close.calls.reset();
    let button = fixture.debugElement.nativeElement.querySelector('.modal__button--danger');
    button.click();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });


  it('should click on add button', () => {
    spyOn(component, 'onClickAdd');
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.modal__button--add');
    button.click();
    expect(component.onClickAdd).toHaveBeenCalled();
  });

});
