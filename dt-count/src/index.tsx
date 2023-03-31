import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  }, 

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Aluguel',
          amount: '500',
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-01-02'),
        },

        {
          id: 2,
          title: 'Frelance de Website ',
          amount: '1000',
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2021-01-07'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    /*this.get('transactions', (schema) => {
      return schema.db.transactions;
    });*/

    this.get('transactions', (schema) => {
      return schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
