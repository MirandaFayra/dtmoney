import { SummaryContainer } from "./styles";
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import total from '../../assets/total.svg'


export function Summary() {
    return (
        <SummaryContainer>
          <div>
            <header>
              <p> Entradas </p>
              <img src={entradas} alt="Flexa superior em verde para entradas"/>
            </header>
            <strong>R$ 1000.00</strong>
          </div>

          <div>
            <header>
              <p> Saídas </p>
              <img src={saidas} alt="Flexa para baixo em verde para entradas"/>
            </header>
            <strong> -R$ 500.00</strong>
          </div>

          <div className="highlight-background">
            <header>
              <p>Total </p>
              <img src={total} alt="simbolo de cifrao"/>
            </header>
            <strong>R$ 500.00</strong>
          </div>
          
        </SummaryContainer>
    );
}