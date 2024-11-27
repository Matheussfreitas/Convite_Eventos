import { Evento } from "../evento"
import { Id } from "../shared"

export const eventos: Evento[] = [
    {
        id: Id.novo(),
        alias: "festival-de-danca",
        senha: "123456",
        nome: "Festival de Dança",
        data: new Date("2022-02-15T19:00:00"),
        local: "Salão do Festival",
        descricao: "Um evento de dança para todos os interessados em aprender e experimentar.",
        imagem: "/img/festival-de-danca.jpg",
        imagemBackground: "/img/festival-de-danca-background.jpg",
        publicoEsperado: 1000,
        convidados: [
            {
                id: Id.novo(),
                nome: "João",
                email: "joao@example.com",
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 1
            },
            {
                id: Id.novo(),
                nome: "Maria",
                email: "maria@example.com",
                confirmado: false,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0
            },
            {
                id: Id.novo(),
                nome: "Pedro",
                email: "pedro@example.com",
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 2
            }
        ]
    }
]