import DevViewCard3 from "../components/devViewComponents/DVCard3";
import DevViewCard2 from "../components/devViewComponents/DVCard2";
import DevViewCard1 from "../components/devViewComponents/DVCard1";
import DevViewCard0 from "../components/devViewComponents/DVCard0";
import DevViewCard4 from "../components/devViewComponents/DVCard4";
import HomeBtn from "../components/HomeBtn";

function DevView(){
    
    return <div id='DevView' className="DevView">
        <HomeBtn className='HomeBtn'/>
        <DevViewCard0  />
        {/*<div className="vFlexRow">*/}
        <div className="slide-in-top">
        <DevViewCard1/>
        <DevViewCard2/>
        <DevViewCard4/>
        <DevViewCard3/>
        </div>
        {/*</div>*/}
    </div>;

}
export default DevView;