# Popups by Peter Ivey-Hansen - pivey-pops

A customisable alternative to default JS confirmation and alerts boxes. These popups can act as alerts
with only one cancel button or as a confirm alert with 2 buttons (cancel and confirm )where the user can accept a presented condition.

These popups are intended to be more stylish and better as they do not block background actions. The popup
forces action by appearing on top of a modal which stops any further interaction with the application until the alert has been dealt with

simply pass in props to create the desired styling for your alert popup.

### default styling

**_ copy these props to emulate the screenshots _**

const defaults = {

- Modalbgc: 'transparent',
- btnRadius: '10px',
- btnTxtColor: 'white',
- hoverBGC: '#ff8800',
- btnLeftColor: '#D81734',
- btnRightColor: '#2191FB',
- motherPadding: '1rem',
- popUpBGC: '#e1e5e8',
- popUpMotherRadius: '5px',
- titlePadding: '0.5rem 0.5rem',
- txtColor: 'black',
  };

### props

#### \* = required props

1. \* closePopUp={closePopUp} - function that passes a false boolean back to the parent to close the alert box
2. \* confirm={confirmPopUp} - function that passes a true boolean back to confirm an action from the user
3. btns={1} number - determines how may buttons show within the popup || default = 1 || max = 2
4. Modalbgc='transparent' - string
5. btnRadius='10px' - string
6. btnTxtColor: 'white' - string
7. hoverBGC: '#ff8800' - string
8. btnLeftColor: '#D81734' - string
9. btnRightColor: '#2191FB' - string
   10.motherPadding: '1rem' - string
   11.popUpBGC: '#e1e5e8' - string
   12.popUpMotherRadius: '5px' - string
   13.titlePadding: '0.5rem 0.5rem' - string
   14.txtColor: 'black' - string

deconstruct an object to use as props within the component eg.

const [popUp, setPopUp] = useState({
open: false,
title: 'User deleted',
text: 'the user with the name of: John was successfully deleted'
});

this passes in the text, title and boolean that opens and closes the alert box

### Example usage

````<PopUpBtn type="button" onClick={() => setPopUp({
        ...popUp,
        open: !popUp.open,
    })}>Toggle popup</PopUpBtn>```

```{popUp.open && <PiveyPops
        {...popUp}
        {...params}
        closePopUp={closePopUp} // _ functions must be sent in like so
        confirm={confirmPopUp} // _
        motherPadding={'1rem'}
        titlePadding={'0.5rem 0.5rem'}
        messagePadding={'0.5rem'}
        maxW={'15rem'}
        modalBGC="rgba(0, 0, 0, 0.6)"
        popUpBGC="#e1e5e8"
        motherRadius="10px"
        btns={2}
    />}```

props sent in are all destructed so can be sent in like so:

### functions must be sent in as seen above, not as methods in a props object

const params = {
titleFontSize: '1.2rem',
messageFontSize: '0.8rem'
motherPadding: '1rem',
titlePadding: '0.5rem 0.5rem',
messagePadding: '0.5rem',
maxW: '15rem',
modalBGC: "rgba(0, 0, 0, 0.6)",
popUpBGC: "#e1e5e8"//
motherRadius: "10px",
btns: 2
}

```<PiveyPops
{...params}
/>```

to write about - the visibility of the modal - it is always on screen overlaying everything (z-index: 1000)but is not visible until a 'true' value is passed into the closePopUp function.
````
