import React from 'react';
import ReactDOM from 'react-dom/client';

import Loading from '../components/Loading/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LoadingPage = () => {
  return (
    root.render(
      <React.StrictMode>
        <Loading />
      </React.StrictMode>
    )
  )
}

export default LoadingPage;