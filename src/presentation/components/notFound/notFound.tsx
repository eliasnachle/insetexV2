import Link from "next/link";
import React from "react";
import { notFoundContainer } from "./notFound.css";

export default function NotFound() {
  return (
    <div className={notFoundContainer}>
      <h1>404</h1>
      <h2>Ooops! Página não encontrada</h2>
      <p>
        Nos informe se você é um Usuário em busca de novos locais e opiniôes. Ou
        um empreendedor querendo melhorar através de feedbacks.
      </p>
      <Link href='/'>Voltar para o início</Link>
    </div>
  );
}
