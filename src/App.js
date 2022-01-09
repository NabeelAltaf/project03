import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room';

function App () { // An object is coming from the props under the tag name which is equal to what is set in index

  const [isLit, setLit] = useState(true);

  return (

    <div>
      <Room></Room>
    </div>

  );

}

export default App;
