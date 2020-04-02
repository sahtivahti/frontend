import React from 'react';
import Dashboard from './Component/Dashboard';
import { HashRouter as Router } from 'react-router-dom';
import SignIn from './Component/SignIn';
import { useAuth0 } from './Auth0Connect';

const App: React.FC = () => {  
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div></div>;
  }

  return (
    <div>
      <Router>
        {!isAuthenticated && <SignIn />}
        {isAuthenticated && <Dashboard />}
      </Router>
    </div>
  );
}

export default App;
