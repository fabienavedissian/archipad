import { ParticipantInvitationState, ParticipantRole } from "../enum/participant.enum";
import { ProjectParticipant } from "../interfaces/project.interface";

export class ProjectParticipantService {

    public ownerProject$: Promise<ProjectParticipant[]>;
    public participantProject$: Promise<ProjectParticipant[]>;
    public listParticipant$: Promise<ProjectParticipant[]>;

    private projectParticipant: ProjectParticipant[] = [
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
        {
            email: "laurent@bigsool.com",
            name: "Laurent Wozniak",
            company: "Bigsool",
            function: "Maitre d'oeuvre",
            projectId: 34567,
            role: ParticipantRole.COLLABORATOR,
            state: ParticipantInvitationState.PENDING
        },
        {
            email: "mic@mac.com",
            name: "Mic Fast",
            company: "Electricté Fast",
            function: "Electricité",
            projectId: 34567,
            role: ParticipantRole.WORKPACKAGE,
            state: ParticipantInvitationState.ACTIVE
        },
        {
            email: "rick@gallant.com",
            name: "Eric Gallant",
            company: "Peinture Gallant",
            function: "Peinture",
            projectId: 34567,
            role: ParticipantRole.WORKPACKAGE,
            state: ParticipantInvitationState.ACTIVE
        },
        {
            email: "gg@gg-plomberie.com",
            name: "Guillaume Gonzales",
            company: "Gonzales peinture",
            function: "Plomberie",
            projectId: 34567,
            role: ParticipantRole.WORKPACKAGE,
            state: ParticipantInvitationState.ACTIVE
        },
        {
            email: "info@cesar-btp.com",
            name: "JF Cesar",
            company: "Cesar BTP",
            function: "Terrassement",
            projectId: 34567,
            role: ParticipantRole.WORKPACKAGE,
            state: ParticipantInvitationState.ACTIVE
        }
    ];

    async getParticipants(role?: string): Promise<ProjectParticipant[]> { 
        return new Promise<ProjectParticipant[]>((resolve, reject) => {
            if (role) {
                let projectParticipant = this.projectParticipant.filter(o => o.role.toString().includes(role.toString()));
                resolve(projectParticipant);
            } else {
                setTimeout(() => {
                    resolve(this.projectParticipant);
                }, 100)
            }
        });
    }

    async addParticipant(participant: ProjectParticipant, project: string) {
        if (!this[project]) {
            this[project] = new Promise<ProjectParticipant[]>((resolve, reject) => {
                const newArray: ProjectParticipant[] = [];
                resolve(newArray);
            });
        }
        this[project].then((participants: ProjectParticipant[]) => {
            console.log(participants)
            this[project] = new Promise<ProjectParticipant[]>((resolve, reject) => {
                participants.push(participant);
                resolve(participants)
            });
        });
    }

}