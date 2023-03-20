import MiddleJoint from "../../components/MiddleJoint";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";
import "./FullScreenView.css"

const FullScreenView = ({pokemon, isLoading, next}) => {
    return (
        <div className="full-screen-view-container">
            <LeftSide pokemon={pokemon} isLoading={isLoading}/>
            <MiddleJoint />
            <RightSide pokemon={pokemon} next={next}/>
        </div>
    )
}

export default FullScreenView;