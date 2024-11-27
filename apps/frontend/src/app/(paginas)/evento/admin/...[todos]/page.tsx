"use client"
import { Convidado, Evento, eventos } from "c:/Users/Bolt/Convite_Eventos/apps/frontend/src/core/index";
import DashboardEvento from "C:/Users/Bolt/Convite_Eventos/apps/frontend/src/components/evento/DashboardEvento.tsx"
import FormSenhaEvento from "C:/Users/Bolt/Convite_Eventos/apps/frontend/src/components/evento/FormSenhaEvento.tsx"
import { useState, useEffect } from "react";
import React from "react";

export default function PaginaAdminEvento(props: any) {
    const params: any = props.params;

    const id = params.todos[0];
    const [evento, setEvento] = useState<Evento | null>(null);
    const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

    const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];

    const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

    const totalGeral = presentes?.reduce((total: number, convidado: Convidado) => {
        return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

    function carregarEvento() {
        const evento = eventos.find((evento) => evento.id === id && evento.senha === senha);
        setEvento(evento ?? null);
    };

    useEffect(() => {
        carregarEvento();
    }, [id, senha]);

    return (
        <div className="flex flex-col items-center">
            {evento ? (
                <DashboardEvento evento={evento} presentes={presentes} ausentes={ausentes} totalGeral={totalGeral}/>
            ) : ( <FormSenhaEvento /> )}
        </div>
    )
}