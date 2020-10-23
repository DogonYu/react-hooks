import React, { useState, useRef, useEffect } from 'react';
import useAxios from './useAxios';

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json',
  });
  return (
    <div className="App">
      <div>{data && data.status}</div>
      <div>{loading && 'Loading'}</div>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
