import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedinIcon, 
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CarretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button type="button" className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button type="button">
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button type="button">
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/18500523?s=460&u=7310016d6535531462d38a52b7074635b02a91aa&v=4" />
              <span>Eu <CarretDownIcon /></span>
            </button>
            
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;