import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerTransition } from "./styles";

interface  Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

export function TransitionTables() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

    return (
      <ContainerTransition>
        <table>
          <thead>
            <tr>
              <th> Título </th>
              <th> Valor </th>
              <th> Categoria </th>
              <th> Data </th>
            </tr>
          </thead>
            <tbody>
              {
                transactions.map(transaction=>{
                  return (
                    <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(transaction.amount)}
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                  )
                })
              }
            

   

            </tbody>

        </table>
      </ContainerTransition>
    );
}