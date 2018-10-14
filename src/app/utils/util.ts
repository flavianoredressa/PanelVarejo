export class Util{
    static showApStatus(st):string{
        switch(st) { 
            case 1: { 
               return "Disponível"
            } 
            case 2: {   
                return "Ocupado"
            } 
            case 3: { 
                return "Aguardando manutenção"
             } 
             case 4: { 
                return "Aguardando Arumação"
             } 
             case 5: { 
                return "Em manutenção"
             } 
             case 6: {
                return "Em arrumação"
             } 
            default: { 
                return "" 
            } 
         } 
    }
    static getClasApStatus(st){
        switch(st) { 
            case 1: { 
               return "bg-success"
            } 
            case 2: { 
                return "bg-info"
            } 
            case 3: { 
                return "bg-danger"
             } 
             case 4: { 
                return "bg-warning"
             } 
             case 5: { 
                return "bg-dark"
             } 
             case 6: { 
                return "bg-cyan"
             } 
            default: { 
                return ""
            } 
         } 
    }
    static showChamadoStatus(st){
        switch(st) { 
            case '1': { 
               return "Aberto"
            } 
            case '2': { 
                return "Em execução"
            } 
            case '3': { 
                return "Concluido"
             }
            default: { 
                return ""
            } 
         } 
    }
    static showChamadosTipos(st){
        switch(st) { 
            case 1: { 
               return "Gerente"
            } 
            case 2: { 
                return "Recepção"
            } 
            case 3: { 
                return "Cliente"
             } 
             case 4: { 
                return "Camareira"
             } 
             case 5: { 
                return "Manutenção"
             } 
             case 6: { 
                return "Lavanderia"
             } 
            default: { 
                return ""
            } 
         } 
    }
}