import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </div>
  );
};

export default App;
