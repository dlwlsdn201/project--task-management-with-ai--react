import React from 'react';
import './App.css';
import RootLayout from '@components/common/Layout';
import SignIn from '@components/SignIn';

const App = () => {
  return (
    <RootLayout>
      <SignIn />
    </RootLayout>
  );
};

export default App;
