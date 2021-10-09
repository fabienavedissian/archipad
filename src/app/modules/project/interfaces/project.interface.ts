import { ParticipantInvitationState, ParticipantRole } from "../enum/participant.enum";

export interface ProjectParticipant {
    email: string;
    name: string,
    company: string,
    function: string,
    projectId: number;
    role: ParticipantRole;
    state: ParticipantInvitationState;
};