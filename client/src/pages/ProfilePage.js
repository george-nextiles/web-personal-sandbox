import React from 'react';
import ReactDOM from 'react-dom/client';

import Test from '../components/Test/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ProfilePage = () => {
  return (
    root.render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>
    )
  )
}

export default ProfilePage;

// ============================================================================
// EXTRA
// ============================================================================

// import React from "react";
  
// const ProfilePage = () => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//     </div>
//   );
// };
  
// export default ProfilePage;