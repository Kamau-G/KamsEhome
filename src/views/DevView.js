import DevViewCard3 from "../components/devViewComponents/DVCard3";
import DevViewCard2 from "../components/devViewComponents/DVCard2";
import DevViewCard1 from "../components/devViewComponents/DVCard1";
import DevViewCard0 from "../components/devViewComponents/DVCard0";
import DevViewCard4 from "../components/devViewComponents/DVCard4";
import HomeBtn from "../components/HomeBtn";

function DevView(){
    const handleOnMouseEnter =()=>{
        document.getElementById('DevViewCard0').style.minWidth = '10vw';
        document.getElementById('DevViewCard2').style.minWidth = '10vw';
        document.getElementById('DevViewCard3').style.minWidth = '10vw';
        document.getElementById('DevViewCard1').style.minWidth = '70vw';
        }
    const handleOnMouseLeave= () =>{
        document.getElementById('DevViewCard0').style.minWidth = '25vw';
        document.getElementById('DevViewCard2').style.minWidth = '25vw';
        document.getElementById('DevViewCard3').style.minWidth = '25vw';
        document.getElementById('DevViewCard1').style.minWidth = '25vw';
    }
    return <div className="DevView">
        <HomeBtn/>
        <DevViewCard0  />
        <div className="vFlexRow">
        <div className="vFlexRow2 slide-in-top">
        <DevViewCard1 handleOnMouseEnter={handleOnMouseEnter} handleOnMouseLeave={handleOnMouseLeave}  />
        <DevViewCard2/>
        <DevViewCard4/>
        </div>
        <DevViewCard3/>
        </div>
    </div>;

}
export default DevView;