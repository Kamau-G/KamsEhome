import DogViewCard0 from "../components/DogViewCard0";
import DogViewCard1 from "../components/DogViewCard1";
import DogViewCard2 from "../components/DogViewCard2";
import DogViewCard3 from "../components/DogViewCard3";
import HomeBtn from "../components/HomeBtn";

function DogView(){

    return<div className="DogView">
        <HomeBtn/>
        <DogViewCard0/>
        <DogViewCard1/>
        <DogViewCard2/>
        <DogViewCard3/>
    </div>;
}
export default DogView;