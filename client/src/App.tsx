import React from 'react';
import './App.css';
import RootLayout from '@components/common/Layout';
// import SignIn from '@components/SignIn';
import SignUp from '@components/SignUp';

const App = () => {
  return (
    <RootLayout>
      {/* <SignIn /> */}
      <SignUp />
    </RootLayout>
  );
};

export default App;
