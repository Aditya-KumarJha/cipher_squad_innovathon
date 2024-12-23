import React, { useContext } from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Modal from '../../components/Modal';
import { ModalContext } from '../../context/ModalContext';

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #1e1e1e;
  color: #e0e0e0;
`;

const Home = () => {
  const { isOpenModal } = useContext(ModalContext);
  
  return (
    <StyledHome>
      <LeftComponent />
      <RightComponent />
      {isOpenModal.show && <Modal />}
    </StyledHome>
  );
};

export default Home;

