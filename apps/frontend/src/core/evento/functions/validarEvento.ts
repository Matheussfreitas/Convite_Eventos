import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];

    if (!evento.nome) {
        erros.push('Nome é obrigatório');
    }

    if (!evento.alias) {
        erros.push('Alias é obrigatório')
    }

    if (!evento.descricao) {
        erros.push('Descriição é obrigatória')
    }

    if (!evento.data) {
        erros.push('Data é obirgatória')
    }

    if (!evento.local) {
        erros.push('Local é obrigatório')
    }

    if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
        erros.push('Quantidade de público esperado é obrigatório')
    }

    if (!evento.imagem) {
        erros.push('A imagem é obrigatória')
    }

    return erros;
}