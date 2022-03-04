import "./sidebar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const SideBar = ()=>{
  const history = useHistory();
    return(
    <>   
    <div className="sidebar">
    <div className="top-left">
    <h1 className="logo">Fish Landia</h1>
    </div> 
      <div className="sidebarWrapper">
      <div className="sidebarMenu">
          <ul className="sidebarList">
          <button className='button' onClick={() => history.push('/Home')} > HOME </button><br></br>
          <button className='button' onClick={() => history.push('/users')} > USERS </button><br></br>
          <button className='button' onClick={() => history.push('/Products')} > PRODUCTS </button><br></br>
          <button className='button' onClick={() => history.push('/orders')} > ORDERS </button><br></br>
          </ul>
          <button className='button' onClick={() => history.push('/')} > LOGOUT </button>
        </div>
      </div>
    </div>
    </>
  );
}
export default SideBar;