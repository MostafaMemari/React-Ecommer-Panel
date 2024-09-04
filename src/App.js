import { useEffect } from 'react';

import './assets/css/app.css';
import Router from './router';

function App() {
  useEffect(() => {
    require('./assets/js/app');
  }, []);

  return <Router></Router>;
}

export default App;
