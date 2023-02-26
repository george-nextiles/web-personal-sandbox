import React from 'react';
import ReactDOM from 'react-dom/client';

import Test from '../components/Test/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Athletes = () => {
  return (
    root.render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    )
  )
}

export default Athletes;

// ============================================================================
// EXTRA
// ============================================================================

// import React from "react";
  
// const AthletePage = () => {
//   return (
//     <div>
//       <h1>Athlete Page</h1>
//     </div>
//   );
// };
  
// export default AthletePage;