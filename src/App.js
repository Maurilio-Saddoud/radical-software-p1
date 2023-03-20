import logo from "./logo.svg";
import "./App.css";
import FullScreenView from "./containers/FullScreenView/FullScreenView";
import MobileView from "./containers/MobileView";
import { useEffect, useState } from "react";
// import $ from "jquery";

function App() {
  const INITIAL_OBJ = {
    name: "-",
    height: "-",
    weight: "-",
    types: [{ type: { name: "-" } }],
    sprites: {
      front_default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fpokeball&psig=AOvVaw0AY-C4iyAGx7F_ZUIjcYhc&ust=1663894850875000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjsy72Zp_oCFQAAAAAdAAAAABAJ",
    },
  };
  const MAX_ITERATIONS = 6;
  const MIN_ITERATIONS = 2;
  const MAX_ADS = 5;
  const MAX_POKEMON = 904;
  const MAX_LOADING = 1200;
  const MIN_LOADING = 400;
  const [pokemon, setPokemon] = useState(INITIAL_OBJ);
  const [isLoading, setIsLoading] = useState(true);

  const maxIterations = () => {
    return Math.floor(
      Math.random() * (MAX_ITERATIONS - MIN_ITERATIONS) + MIN_ITERATIONS
    );
  };

  const [batteryLevel, setBatteryLevel] = useState(maxIterations());

  const randNum = () => {
    return Math.floor(Math.random() * MAX_POKEMON);
  };

  const randAd = () => {
    return Math.floor(Math.random() * MAX_ADS);
  };

  const [adIndex, setAdIndex] = useState(randAd());

  const randTime = () => {
    return Math.floor(
      Math.random() * (MAX_LOADING - MIN_LOADING) + MIN_LOADING
    );
  };

  const adsArray = [
    "./ads/bananas.mp4",
    "./ads/dominos.mp4",
    "./ads/doritos.mp4",
    "./ads/jersey-mikes.mp4",
    "./ads/burgerking.mp4",
  ];

  const skipAd = () => {
    document.getElementById("vid").pause();
    document.getElementById("vid").currentTime = 0;
    document.getElementById("ad-wall").style.display = "none";
    document.getElementById("skip-button").style.display = "none";
    setAdIndex(randAd());
    setBatteryLevel(5);
    document.getElementById("src").setAttribute("src", randAd());
  };

  const nextPokemon = () => {
    switch (batteryLevel) {
      case 1:
        document.getElementById("ad-wall").style.display = "inherit";
        document.getElementById("vid").play();
        setTimeout(() => {
          document.getElementById("skip-button").style.display = "block";
        }, 5000);

        document.getElementById("red-circle").classList.remove("red-blink");
        document
          .getElementById("mobile-red-circle")
          .classList.remove("red-blink");
        document.getElementById("green-circle").classList.add("green-blink");
        document
          .getElementById("mobile-green-circle")
          .classList.add("green-blink");
        setAdIndex(randAd());
        break;
      case 2:
        // blink red light
        document.getElementById("red-circle").classList.add("red-blink");
        document.getElementById("red-circle").classList.remove("red-on");
        document.getElementById("mobile-red-circle").classList.add("red-blink");
        document.getElementById("mobile-red-circle").classList.remove("red-on");
        break;
      case 3:
        // switch to red light
        document
          .getElementById("yellow-circle")
          .classList.remove("yellow-blink");
        document.getElementById("red-circle").classList.add("red-on");
        document
          .getElementById("mobile-yellow-circle")
          .classList.remove("yellow-blink");
        document.getElementById("mobile-red-circle").classList.add("red-on");
        break;
      case 4:
        // blink yellow light
        document.getElementById("yellow-circle").classList.remove("yellow-on");
        document.getElementById("yellow-circle").classList.add("yellow-blink");
        document
          .getElementById("mobile-yellow-circle")
          .classList.remove("yellow-on");
        document
          .getElementById("mobile-yellow-circle")
          .classList.add("yellow-blink");

        break;
      case 5:
        // switch to yellow light
        document.getElementById("yellow-circle").classList.add("yellow-on");
        document.getElementById("green-circle").classList.remove("green-blink");
        document
          .getElementById("mobile-yellow-circle")
          .classList.add("yellow-on");
        document
          .getElementById("mobile-green-circle")
          .classList.remove("green-blink");
        break;
      default:
      // code block
    }
    setBatteryLevel(batteryLevel - 1);
    fetchNewPokemon();
  };

  const fetchNewPokemon = () => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum()}/`)
      .then((res) => {
        return res.json();
      })
      .then((newPokemon) => {
        setPokemon(newPokemon);
        // console.log(newPokemon);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, randTime());
  };

  useEffect(() => {
    switch (batteryLevel) {
      case 2:
        // blink red light
        document.getElementById("red-circle").classList.add("red-on");
        document.getElementById("mobile-red-circle").classList.add("red-on");
        break;
      case 3:
        // switch to red light
        document.getElementById("yellow-circle").classList.add("yellow-blink");
        document
          .getElementById("mobile-yellow-circle")
          .classList.add("yellow-blink");
        break;
      case 4:
        document.getElementById("yellow-circle").classList.add("yellow-on");
        document
          .getElementById("mobile-yellow-circle")
          .classList.add("yellow-on");
        break;
      case 5:
        document.getElementById("green-circle").classList.add("green-blink");
        document
          .getElementById("mobile-green-circle")
          .classList.add("green-blink");
        break;
      default:
      //
    }
    fetchNewPokemon();
  }, []);

  return (
    <div className="app-container">
      <div className="ad-wall-container" id="ad-wall">
        <div className="card">
          <h1>Pokedex out of battery: Watch ad to recharge.</h1>
          <video id="vid" width={"100%"} autoplay>
            <source id="src" src={adsArray[randAd()]} />
          </video>
          <div className="skip-container">
            <button onClick={skipAd} id="skip-button">
              Skip Ad
            </button>
          </div>
        </div>
      </div>
      <div className="full-screen">
        <FullScreenView
          pokemon={pokemon}
          isLoading={isLoading}
          next={nextPokemon}
        />
      </div>
      <div className="mobile">
        <MobileView
          pokemon={pokemon}
          isLoading={isLoading}
          next={nextPokemon}
        />
      </div>
    </div>
  );
}

export default App;
