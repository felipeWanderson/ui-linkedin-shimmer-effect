import React, { useState, useEffect } from 'react';

import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftCollum from '../LeftColumn';
import MiddleCollum from '../MiddleColumn';
import RightCollum from '../RightColumn';
import AdBanner from '../AdBanner';
import { Container } from './styles';

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Container>
      <MobileHeader /> 
      <DesktopHeader />

      <span>
        <AdBanner />
      </span> 

      <main>
        <LeftCollum isLoading={loading} />
        <MiddleCollum />
        <RightCollum />
      </main>
    </Container>
  );
}

export default Layout;