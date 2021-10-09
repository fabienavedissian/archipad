import { ProjectParticipant } from "./project.interface";

export interface AddParticipant {
    title: string;
    dataSource$: Promise<ProjectParticipant[]>;
    project: string;
}