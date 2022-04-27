import React from 'react';

import './App.css';

function App() {
  function handleClickFeed(){
    const requestOptions = {
      method: 'GET',
    };
    fetch('/feed', requestOptions).then(response => response.json()).then((data)=>{console.log(data)})
  }

  return (
    <div className="content">
      <div className='header'>
        <p className='option' onClick={handleClickFeed}>alimentação</p>
        <p className='option'>monitoramento</p>
        <div className='profile'>
          <span className='profile-text'>voltar para o dashboard</span>
        </div>
      </div>
      <div className='dashboard'>

      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
