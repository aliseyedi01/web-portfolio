export type ProjectCategory = "Fullstack" | "Bot" | "Frontend" | "Backend";

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: ProjectCategory;
    techStack: string[];
    codeUrl: string;
    liveUrl: string;
}