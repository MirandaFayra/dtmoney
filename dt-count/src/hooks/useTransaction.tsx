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

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction:(transaction :TransactionInput) => Promise<void>;
  }
  
  const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData) 
  
  // Criando um provider com todas as informacoes de transacciones
  
  export function TransactionsProvider ({children}:TransactionProviderProps){
      const [transactions, setTransactions] = useState<Transaction[]>([])
  
      useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
      },[])  
  
      // Funcao que pega toda a lógica de criacao das transacoes 
  
      async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
          ...transactionInput,
          createdAt : new Date()
        })
        const {transaction} = response.data
  
        setTransactions([
          ...transactions,
          transaction
        ])
  
  
      }
  
      return(
        <TransactionsContext.Provider value ={{transactions, createTransaction}}>
          {children}
        </TransactionsContext.Provider>
      )
  }
  
  export function useTransaction(){
    const context = useContext(TransactionsContext)
    return context
} 
