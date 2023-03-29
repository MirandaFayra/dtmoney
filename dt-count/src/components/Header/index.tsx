import logo from './../../assets/logo.svg';
import { ContainerHeader, Content} from './styles';

interface HeaderProps {
  onOpenNewTransactionModal : () => void; 
}

export function Header({onOpenNewTransactionModal}:HeaderProps ) {

  return (
    <ContainerHeader>
      <Content>
        <img src ={logo} alt="logo verde redondo, com letras brancas dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação 
        </button>
      </Content>
    </ContainerHeader>
  );
}