import BlueButtonContainer from "../BlueButtonContainer/BlueButtonContainer";
import "./RightSide.css";

const RightSide = ({ pokemon, next }) => {
  return (
    <div className="right-container">
      <div className="top-background-container">
        <div className="top-left-background"></div>
        <div className="right-slant"></div>
        <div className="top-right-background"></div>
      </div>
      <div className="right-side-middle-container">
        <div className="screen">
          <div className="top-row">
            <div className="top-left-screen">
              <p>
                Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </p>
            </div>
            <div className="top-right-screen">
              <p>Type: {pokemon.types[0].type.name}</p>
            </div>
          </div>
          <div className="bottom-row">
            <div className="bottom-left-screen">
              <p>Height: {pokemon.height * 10}cm</p>
            </div>
            <div className="bottom-right-screen">
              <p>Weight: {pokemon.weight / 10}kg</p>
            </div>
          </div>

          {/* <p style={{margin: "5px"}}>ERROR:</p>
          <p style={{margin: "5px"}}>Pokedex damaged.</p> */}
        </div>
        <BlueButtonContainer />
        <div className="spacing-container">
          <div className="small-buttons-container">
            <div
              className="small-button"
              style={{ background: "#515151" }}
            ></div>
            <div className="small-button-spacer"></div>
            <div
              className="small-button"
              style={{ background: "#515151" }}
            ></div>
          </div>
        </div>
        <div className="new-container">
          <div className="yellow-buttons-container">
            <div onClick={next} className="yellow-button-left">{"<-"}</div>
            <div onClick={next} className="yellow-button-right">{"->"}</div>
          </div>
          <div className="yellow-button"></div>
        </div>
        <div className="bottom-row-container">
          <div className="grey-button"></div>
          <div className="grey-button"></div>
        </div>
      </div>
      <div className="bottom-background"></div>
    </div>
  );
};

export default RightSide;
