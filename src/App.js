import React from 'react';
import './App.css'; 
import Stars from './components/Stars';

function App() {
  return (
    <div className="container">
      <dl>
        {[undefined,0,1,2,3,4,5,6].map((count) =>
          <>
            <dt>count={count}</dt>
            <dd>
              <Stars count={count}></Stars>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
}

export default App;
