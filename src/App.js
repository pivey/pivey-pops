import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './components/base.css';
import PiveyPops from './components/PiveyPops';

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
      title: 'Edit User',
      text: 'Are you content with the edits made to user: Philip?'
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

  const props = {
    titleFontSize: '1.2rem',
    messageFontSize: '0.8rem',
    motherPadding: '1rem',
    titlePadding: '0.5rem 0.5rem',
    messagePadding: '0.5rem',
    maxW: '15rem',
    modalBGC: "rgba(0, 0, 0, 0.6)",
    popUpBGC: "#e1e5e8",
    motherRadius: "10px",
    btns: 2,
    // hoverBGC: 'darkGrey',
    // hoverTxtColor: 'yellow', 
    closePopUp: closePopUp,
    confirm: confirmPopUp,
    open: popUp.open,
    title: popUp.title,
    text: popUp.text
}

  return (
    <>
    <PopUpBtn type="button" onClick={() => setPopUp({ 
          ...popUp,
          open: !popUp.open,
        })}>Toggle popup</PopUpBtn>

        {popUp.open && <PiveyPops 
                        {...props} 
                        />}
    </>
  )
}

export default App;
