import React from 'react';
import { InnerContainer, RootContainer } from './layout.styled';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootContainer>
      <InnerContainer>{children}</InnerContainer>
    </RootContainer>
  );
};

export default RootLayout;
