import { useContext} from "react";
import { useTransaction } from "../../hooks/useTransaction";
import { ContainerTransition } from "./styles";


export function TransitionTables() {

 const {transactions} = useTransaction()

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
                    <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                    </td>
                  </tr>
                  )
                })
              }
            

   

            </tbody>

        </table>
      </ContainerTransition>
    );
}