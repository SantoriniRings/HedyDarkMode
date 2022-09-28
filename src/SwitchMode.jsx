import React from 'react'




const SwitchMode = (props) => {

const changeMode = () => {
    if (props.theme === "blanc") {
        props.setTheme("noir")
    }  else {
        props.setTheme("blanc")
    }
}

const switchModeStyle = {
    backgroundColor: "#212121",
    color: "white",
    bordeRadius: "5px",
    display: "flex",
    aligItems: "center",
    gap: "10px",
    justifyContent: "center",

}
  return (
    <button style={switchModeStyle} onClick={() => changeMode()}>{props.theme} </button>
  )
}

export default SwitchMode