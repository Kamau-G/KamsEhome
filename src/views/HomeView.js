import DevCard from "../components/DevCard";
import DevView from "./DevView";
import DogCard from "../components/DogCard";
import DogView from "./DogView";

function HomeView({homeObj,setNav}){
    return(<>
        {(homeObj == null) ? 
        (<><DevCard setNav={setNav}/><DogCard setNav={setNav}/></>):
        (homeObj === 0) ? <DevView/>: (<DogView/>)
      }
      </>
    );
}
export default HomeView;