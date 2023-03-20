import BlueButton from "../../components/BlueButton";
import "./BlueButtonContainer.css"

const BlueButtonContainer = () => {
  return (
    <div className="blue-button-container" style={{marginTop: "20px"}}>
      <div className="row">
        <BlueButton /*text={"ABC"} id="abc"*/ />
        <BlueButton /*text={"DEF"} id="def"*/ />
        <BlueButton /*text={"GHI"} id="ghi"*/ />
        <BlueButton /*text={"JKL"} id="jkl"*/ />
        <BlueButton /*text={"MNO"} id="mno"*/ />
      </div>
      <div className="row">
        <BlueButton /*text={"PQRS"} id="pqrs"*/ />
        <BlueButton /*text={"TUV"} id="tuv"*/ />
        <BlueButton /*text={"WXYZ"} id="wxyz"*/ />
        <BlueButton /*text={"|__|"} id="space"*/ />
        <BlueButton /*text={"<-"} id="back"*/ />
      </div>
    </div>
  );
};

export default BlueButtonContainer;
