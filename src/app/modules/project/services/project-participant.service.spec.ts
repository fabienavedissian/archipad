// MODULES
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ParticipantInvitationState, ParticipantRole } from '../enum/participant.enum';

// INTEFACES
import { ProjectParticipant } from '../interfaces/project.interface';

// SERVICES
import { ProjectParticipantService } from './project-participant.service';


describe('ProjectParticipantService', () => {
  let service: ProjectParticipantService;
  const participant: ProjectParticipant = {
    email: "thomas@bigsool.com",
    name: "Thomas Dubois",
    company: "Bigsool",
    function: "Maitre d'oeuvre",
    projectId: 34567,
    role: ParticipantRole.OWNER,
    state: ParticipantInvitationState.ACTIVE
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ProjectParticipantService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get participants', fakeAsync(() => {
    let projectParticipant: ProjectParticipant[];
    service.getParticipants().then(_projectParticipant => projectParticipant = _projectParticipant);
    tick(1000);
    expect(projectParticipant.length).toBeGreaterThan(0);
  }));

  it('should get participant if is owner', fakeAsync(() => {
    let projectParticipant: ProjectParticipant[];
    service.getParticipants('owner').then(_projectParticipant => projectParticipant = _projectParticipant);
    tick(1000);
    expect(projectParticipant.length).toBeGreaterThan(0);
  }));

  it('should add participant', fakeAsync(() => {
    service.addParticipant(participant, 'participantProject$');
    tick(1000);
    service.participantProject$.then((projectParticipant) => {
      expect(projectParticipant.length).toBeGreaterThan(0);
    });
  }));
});
