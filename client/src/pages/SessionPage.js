import React from 'react';
import ReactDOM from 'react-dom/client';

import Test from '../components/Test/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));

const SessionsPage = () => {
  return (
    root.render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    )
  )
}

export default SessionsPage;

// ============================================================================
// EXTRA
// ============================================================================

// import React from "react";
  
// const SessionsPage = () => {
//   return (
//     <div>
//       <h1>Sessions Page</h1>
//     </div>
//   );
// };
  
// export default SessionsPage;