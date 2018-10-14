import { Tarefas } from './tarefas';
import { Chamado } from './chamado';
export interface Apartamento{
    id?:string;
    numero?:string;
    status?:number;
    tarefas?:[Tarefas];
    chamados?:Chamado[];
}