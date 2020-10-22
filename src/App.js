import React, { useEffect } from 'react';

const useBeforeLeave = onBefore => {
  const handle = () => console.log('leaving');
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
  if (typeof onBefore !== 'function') return;
};

const App = () => {
  const begForLife = () => console.log('plz dont leave');
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
