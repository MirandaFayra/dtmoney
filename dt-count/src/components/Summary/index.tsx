import { SummaryContainer } from "./styles";
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionContex";
import { useContext } from "react";


export function Summary() {

  const {transactions} = useContext(TransactionsContext)
  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit'){
      const montanteTransacaoNumero = Number(transaction.amount)
      //Estamos somando o número dos valores de depósito
      acc.deposits += montanteTransacaoNumero
      //Se for um deposito, vamos somar do total 
      acc.total += montanteTransacaoNumero
    } else{
      // Estamos somando o  número de saques
      acc.withdraws += transaction.amount
      //Se for um deposito, vamos subtrair do total 
      acc.total -= transaction.amount
      console.log(typeof transaction.amount)
    }
    console.log(acc.total)
    return acc
  },{
    deposits:0,
    withdraws:0,
    total:0
    
  })

  

    return (
        <SummaryContainer>
          <div>
            <header>
              <p> Entradas </p>
              <img src={entradas} alt="Flexa superior em verde para entradas"/>
            </header>
            <strong>{summary.deposits}</strong>
          </div>

          <div>
            <header>
              <p> Saídas </p>
              <img src={saidas} alt="Flexa para baixo em verde para entradas"/>
            </header>
            <strong> - {summary.withdraws}</strong>
          </div>

          <div className="highlight-background">
            <header>
              <p>Total </p>
              <img src={totalImg } alt="simbolo de cifrao"/>
            </header>
            <strong>{summary.total}</strong>
          </div>
          
        </SummaryContainer>
    );
}