import { User } from "./user";
import { Tarefas } from "./tarefas";

export class Chamado{
    id?:string;
    imagens?:string[];
    quarto?:string;
    status?:string;
    tipo?:number;
    urgente?:boolean;
    user?: User;
    tarefas?: Tarefas[]
}