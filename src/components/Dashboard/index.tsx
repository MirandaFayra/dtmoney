import { Summary } from "../Summary";
import { ContainerDasboard } from "./styles";
import {TransitionTables} from "../Transition_Tables/index"

export function Dashboard() {
    return (
      <ContainerDasboard>
        <Summary/>
        <TransitionTables/>
      </ContainerDasboard>
    );
}