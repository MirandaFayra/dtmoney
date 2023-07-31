import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

// criando uma interface  par tipar as transações 

interface Transaction{
    id:number,
    title:string,
    amount:number,
    type:string,
    category:string,
    createdAt:string
}

// Criando um novo tipo chamado TransactionInput, utilizando as  mesmas propriedades do tipo  Transaction, tirando o id e createdAt => Omit, é uma utilizade do typescript, permitindo excluir algumas propriedades
type TransactionInput = Omit <Transaction, "id" | "createdAt">

interface TransactionProviderProps {
  children: ReactNode;
}
