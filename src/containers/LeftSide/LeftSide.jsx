import { CircularProgress } from "@mui/material";
import "./LeftSide.css";

const LeftSide = ({ pokemon, isLoading }) => {
  return (
    <div class="left-container">
      <div className="top-bezel">
        <div className="top-left">
          <div className="white-circle">
            <div className="blue-circle"></div>
            <div className="red-circle" id="red-circle"></div>
            <div className="yellow-circle" id="yellow-circle"></div>
            <div className="green-circle" id="green-circle"></div>
          </div>
        </div>
        <div className="slant"></div>
        <div className="top-right"></div>
      </div>
      <div className="middle-container">
        <div className="screen-container">
          <div className="top">
            <div className="small-circle"></div>
            <div className="space"></div>
            <div className="small-circle"></div>
          </div>
          <div className="middle">
            <div className="a"></div>
            <div className="b">
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
        <div className="button-container">
          <div className="spacing-container">
            <div className="grey-circle"></div>
            <div className="small-buttons-container">
              <div
                className="small-button"
                style={{ backgroundColor: "#EC7073" }}
              ></div>
              <div className="small-button-spacer"></div>
              <div
                className="small-button"
                style={{ backgroundColor: "#4692E9" }}
              ></div>
            </div>
            <div className="d-pad">
              <div className="vertical">
                <div className="horizontal"></div>
              </div>
            </div>
          </div>
          <div className="green-screen"></div>
        </div>
      </div>
      <div className="bottom-bezel"></div>
    </div>
  );
};

export default LeftSide;
