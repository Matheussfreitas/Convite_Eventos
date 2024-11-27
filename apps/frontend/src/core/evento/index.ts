import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarEvento from "./functions/complementarEvento";
import complementarConvidado from "./functions/complementarConvidado";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import criarEventoVazio from "./functions/criarEventoVazio";

export type { Evento, Convidado };

export { 
    complementarEvento, 
    complementarConvidado, 
    criarConvidadoVazio, 
    criarEventoVazio 
};