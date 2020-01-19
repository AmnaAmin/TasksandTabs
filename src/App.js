import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  let cardList = [
    { form: true, title: null, info: 'archive' },
    { form: false, title: 'Low Priority Tasks', info: 'low' },
    { form: false, title: 'High Priority Tasks', info: 'high' },
    { form: false, title: 'Medium Priority Tasks', info: 'medium' }
  ]
  return (
    <div className='App'>
      <div className='appContainer'>
        
        {cardList.map((card, index) => (
          <div className='appCol' key={index}>
          <Card key={index} form={card.form} title={card.title} info={card.info} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
