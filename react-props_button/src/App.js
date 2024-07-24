import React from "react";
import "./styles.css";

export default function App() {
  function handleButton() {
    console.log("Well done!");
  }

  function handleButtonAgain() {
    console.log("Well done again!");
  }

  return (
    <div>
      <Button
        colorButton="#729"
        disabled
        text="Klick mich!"
        colorButtonBackground="#775"
        onButton={handleButton}
        heightProp="150px"
        widthProp="100px"
        radiusProp="50px"
        marginProp="10px"
        fontProp="Consolas"
        fontSizeProp="large"
      />
      <Button
        colorButton="#799"
        text="Klick mich!"
        colorButtonBackground="#715"
        onButton={handleButton}
        heightProp="100px"
        widthProp="150px"
        radiusProp="50px"
        marginProp="10px"
        fontProp="Comic Sans MS"
        fontSizeProp="medium"
      />
      <Button
        colorButton="#199"
        text="Klick mich auch!"
        colorButtonBackground="#215"
        onButton={handleButtonAgain}
        heightProp="75px"
        widthProp="120px"
        radiusProp="50px"
        marginProp="10px"
        fontProp="Impact"
        fontSizeProp={17}
      />
    </div>
  );
}

function Button({
  colorButton,
  disabled,
  text,
  colorButtonBackground,
  onButton,
  heightProp,
  widthProp,
  radiusProp,
  marginProp,
  fontProp,
  fontSizeProp,
}) {
  return (
    <div>
      <button
        onClick={onButton}
        type="button"
        disabled={disabled}
        style={{
          color: colorButton,
          backgroundColor: colorButtonBackground,
          height: heightProp,
          width: widthProp,
          borderRadius: radiusProp,
          margin: marginProp,
          fontFamily: fontProp,
          fontSize: fontSizeProp,
        }}
      >
        {text}
      </button>
    </div>
  );
}
