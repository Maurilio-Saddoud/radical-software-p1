import { CircularProgress } from "@mui/material";
import BlueButtonContainer from "../BlueButtonContainer/BlueButtonContainer";
import "./MobileView.css";

const MobileView = ({ pokemon, isLoading, next }) => {
  return (
    <div className="mobile-container">
      <div className="top-bezel">
        <div className="left-side">
          <div className="white-circle">
            <div className="blue-circle"></div>
            <div className="red-circle" id="mobile-red-circle"></div>
            <div className="yellow-circle" id="mobile-yellow-circle"></div>
            <div className="green-circle" id="mobile-green-circle"></div>
          </div>
        </div>
        <div className="mobile-slant"></div>
        <div className="right-side"></div>
      </div>
      <div className="mobile-screen-container">
        <div className="small-screen-container">
          <div className="top">
            <div className="small-circle"></div>
            <div className="space"></div>
            <div className="small-circle"></div>
          </div>
          <div className="middle">
            <div className="a"></div>
            <div className="b">
              <div className="pokemon-img">
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <img
                    src={pokemon.sprites.front_default}
                    alt="front default sprite of ${pokemon.name}"
                    height="80%"
                    width="80%"
                  />
                )}
              </div>
            </div>
            <div className="c"></div>
          </div>
          <div className="bottom">
            <div className="d">
              <div className="corner"></div>
            </div>
            <div className="e">
              <div className="screen-button-container">
                <div className="medium-circle"></div>
              </div>
              <div className="vent-container">
                <div className="vent"></div>
                <div className="vent"></div>
                <div className="vent"></div>
                <div className="vent"></div>
              </div>
            </div>
            <div className="f"></div>
          </div>
        </div>
        <div className="mobile-d-pad-container">
          <div className="d-pad">
            <div className="vertical">
              <div className="horizontal"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-black-screen-container">
        <div className="mobile-black-screen">
          <div className="top-row">
            <div className="top-left-screen">
              <p>
                Name:{" "}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
        </div>
      </div>
      <BlueButtonContainer />
      <div className="mobile-buttons-container">
        <div className="mobile-yellow-buttons-container">
          <div
            className="mobile-yellow-button"
            onClick={next}
            style={{ margin: "0 20px 0 0", cursor: "pointer" }}
          >
            {"<-"}
          </div>
          <div
            className="mobile-yellow-button"
            onClick={next}
            style={{ cursor: "pointer" }}
          >
            {"->"}
          </div>
        </div>
        <div className="mobile-yellow-circle"></div>
      </div>
      <div className="mobile-bottom-row-container">
        <div className="mobile-grey-button"></div>
        <div className="mobile-grey-button"></div>
      </div>
      <div className="mobile-bottom-bezel"></div>
    </div>
  );
};

export default MobileView;
