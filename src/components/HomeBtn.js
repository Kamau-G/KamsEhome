
import { NavLink } from 'react-router-dom';

function HomeBtn(prop){

    return <NavLink className={`${prop.className}`} to='/'>
        Home
    </NavLink>;
}
export default HomeBtn;