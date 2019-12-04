# Pivey-pops

### Popups by Peter Ivey-Hansen

A customisable alternative to default JS confirmation and alerts boxes. These popups can act as alerts
with only one cancel button or as a confirm alert with 2 buttons (cancel and confirm )where the user can accept a presented condition.

These popups are intended to be more stylish and better as they do not block background actions. The popup
forces action by appearing on top of a modal which stops any further interaction with the application until the alert has been dealt with

simply pass in props to create the desired styling for your alert popup.

##### How things work.

    1. The popup box is contained within a modal that is set to visibility: hidden
    2. toggling the visibility of the modal also toggles the alert box inside of it.
    3. the modal and alert appears above everything on the page due to a z-index of 1000

### default styling

#### copy these props to emulate the screenshots

* screenshot_1_alert_popup: 

* screenshot_2_confirm_popup: 

```
const defaults = {
Modalbgc: 'transparent',
btnRadius: '10px',
btnTxtColor: 'white',
hoverBGC: '#ff8800',
btnLeftColor: '#D81734',
btnRightColor: '#2191FB',
motherPadding: '1rem',
popUpBGC: '#e1e5e8',
popUpMotherRadius: '5px',
titlePadding: '0.5rem 0.5rem',
txtColor: 'black',
};
```

### props

#### \* = required props

|    Prop names     | Prop types |  example values |
| :---------------: | :--------: | --------------: |
|   \* closePopUp   |  function  |      closePopUp |
|    \* confirm     |  function  |    confirmPopUp |
|      \* btns      |   number   |          1 or 2 |
|     Modalbgc      |   string   |   'transparent' |
|     btnRadius     |   string   |          '10px' |
|    btnTxtColor    |   string   |         'white' |
|     hoverBGC      |   string   |       '#ff8800' |
|   btnLeftColor    |   string   |       '#D81734' |
|   btnRightColor   |   string   |       '#2191FB' |
|   motherPadding   |   string   |          '1rem' |
|     popUpBGC      |   string   |       '#e1e5e8' |
| popUpMotherRadius |   string   |           '5px' |
|   titlePadding    |   string   | '0.5rem 0.5rem' |
|     txtColor      |   string   |         'black' |

#### \* closePopUp

    passes a false boolean back to the parent to close the alert box

#### \* confirm

    passes a true boolean back to the parent to confirm

#### \* btns

    determines how may buttons show within the popup || default = 1 || max = 2

##### deconstruct an object to use as props within the component eg.

```javascript
const [popUp, setPopUp] = useState({
  open: false,
  title: "User deleted",
  text: "the user with the name of: John was successfully deleted"
});
```

    this passes in the text, title and boolean that opens and closes the alert box

### Example usage

```javascript
// a button to toggle the popup
<PopUpBtn
  type="button"
  onClick={() =>
    setPopUp({
      ...popUp,
      open: !popUp.open
    })
  }
>
  Toggle popup
</PopUpBtn>;

// function receiving the response from the cancel button press

const closePopUp = e => {
  setPopUp({
    ...popUp,
    open: e
  });
};

// function receiving the response from the confirm button press

const confirmPopUp = e => {
  setAccept(e);
};

// props sent in are all destructed so can be sent in like so in an object:

// Example 1: props passed within component

popUp.open && (
  <PiveyPops
    {...popUp}
    {...params}
    // functions must be sent in like so
    closePopUp={closePopUp}
    confirm={confirmPopUp}
    motherPadding={"1rem"}
    titlePadding={"0.5rem 0.5rem"}
    messagePadding={"0.5rem"}
    maxW={"15rem"}
    modalBGC="rgba(0, 0, 0, 0.6)"
    popUpBGC="#e1e5e8"
    motherRadius="10px"
    btns={2}
  />
);

// Example 2: props passed within an object

const props = {
  titleFontSize: "1.2rem",
  messageFontSize: "0.8rem",
  motherPadding: "1rem",
  titlePadding: "0.5rem 0.5rem",
  messagePadding: "0.5rem",
  maxW: "15rem",
  modalBGC: "rgba(0, 0, 0, 0.6)",
  popUpBGC: "#e1e5e8",
  motherRadius: "10px",
  btns: 2,
  hoverBGC: "darkGrey",
  hoverTxtColor: "purple",
  closePopUp: closePopUp,
  confirm: confirmPopUp,
  open: popUp.open,
  title: popUp.title,
  text: popUp.text
};

{
  popUp.open && <PiveyPops {...props} />;
}
```
