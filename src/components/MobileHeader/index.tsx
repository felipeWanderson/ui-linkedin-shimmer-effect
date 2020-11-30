import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars1.githubusercontent.com/u/18500523?s=460&u=7310016d6535531462d38a52b7074635b02a91aa&v=4"/>
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon /> 
    </Container>
  );
}

export default MobileHeader; 