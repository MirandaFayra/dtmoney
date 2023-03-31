import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global_styles";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionContex";

Modal.setAppElement("#root")

export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <GlobalStyle/>
      <Header
        onOpenNewTransactionModal ={handleOpenNewTransactionModal}
      />
      <NewTransactionModal
        isOpen ={isNewTransactionModalOpen} 
        onRequestClose ={handleCloseNewTransactionModal}
      />
      <Dashboard/>
    </TransactionsProvider>
  );
}


