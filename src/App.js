import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles/base.css';
import PiveyPops from './PiveyPops';

const PopUpBtn = styled.button`
  height:auto;
  width:auto;
  color:white;
  background:black; 
  font-size:1rem;
  position: absolute;
  padding:0.8rem;
  left: 50%;
  font-weight: bold;
  border-radius: 5px;
  transform: translate(-50%, 0);
  margin-top:50vh;
  &:focus {
        outline: 0;
    }
`;

function App() {
    const [popUp, setPopUp] = useState({
      open: false,
      title: 'User deleted',
      text: 'the user with the name of: John was successfully deleted'
    });
    const [accept, setAccept] = useState(false)

  useEffect(() => {
    console.log(popUp, '***********');
  }, [popUp])

  const closePopUp = (e) => {
    setPopUp({
      ...popUp,
      open: e
    })
  }

  const confirmPopUp = (e) => {
    setAccept(e)
  }

  const params = {
    titleFontSize: '1.2rem',
    messageFontSize: '0.8rem'
  }

  return (
    <>
    <PopUpBtn type="button" onClick={() => setPopUp({ 
          ...popUp,
          open: !popUp.open,
        })}>Toggle popup</PopUpBtn>

        {popUp.open && <PiveyPops 
                        {...popUp} 
                        {...params} 
                        closePopUp={closePopUp} 
                        confirm={confirmPopUp}
                        motherPadding={'1rem'} 
                        titlePadding={'0.5rem 0.5rem'} 
                        messagePadding={'0.5rem'}
                        maxW={'15rem'}
                        modalBGC="rgba(0, 0, 0, 0.6)"
                        popUpBGC="#e1e5e8"
                        motherRadius="10px"
                        btns={2}
                        />}
    </>
  )
}

export default App;
