import React from 'react';
import ReactDOM from 'react-dom/client';

import Test from '../components/Test/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Dashboard = () => {
  return (
    root.render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    )
  )
}

export default Dashboard;

// ============================================================================
// EXTRA
// ============================================================================

// import React from "react";
  
// const DashboardPage = () => {
//   return (
//     <div>
//       <h1>Dashboard Page</h1>
//     </div>
//   );
// };
  
// export default DashboardPage;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();