import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entradas.svg'
import outImg from '../../assets/saidas.svg'

import { ContainerNewTransactionModal, RadioBox, TransactionTypeContainer } from './style';
import { useTransaction } from '../../hooks/useTransaction'


interface NewTransactionModalProps {
    isOpen :boolean;
    onRequestClose: ()=>void;  
}

export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModalProps){
  const {createTransaction} = useTransaction()

  const [title,setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] =useState('deposit')
  
  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()
    
    await createTransaction({
      title,
      amount,
      category,
      type
    })
    
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

    return(
        <Modal 
          isOpen ={isOpen} 
          onRequestClose ={onRequestClose}
          overlayClassName = 'react-modal-overlay'
          className='react-modal-content'
        >
          <button 

            onClick={onRequestClose} 
            className ='react-modal-close'>

            <img src ={closeImg} 
              alt='X que fechará o modal'
            />

          </button>

          <ContainerNewTransactionModal onSubmit={handleCreateNewTransaction}> 
            <h2> Cadatrar transação</h2>
            <input
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />  

            <input
                type="number"
                placeholder='Valor'
                value={Number(amount)}
                onChange={event => setAmount (Number(event.target.value))}
            /> 

            <TransactionTypeContainer>
              <RadioBox 
                type="button"
                onClick={()=>{setType('deposit')}}
                isActive ={type === 'deposit'}
                activeColor = 'green'
              >
                <img src ={incomeImg} 
                  alt='seta verde para cima'
                />

                <span> Entradas </span>
                
              </RadioBox>

              <RadioBox
                type="button"
                onClick={()=>{setType('withdraw')}}
                isActive ={type === 'withdraw'}
                activeColor = 'red'
              >
                <img src ={outImg} 
                  alt='seta vermelha para baixo'
                />
                
                <span>Saída</span>
                
              </RadioBox>
              
            </TransactionTypeContainer>

            <input
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />  

            <button type='submit'> Cadastrar</button>




          </ContainerNewTransactionModal>
      </Modal>
    )
}