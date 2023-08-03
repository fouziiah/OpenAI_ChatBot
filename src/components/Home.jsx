import { Link } from "react-router-dom";


export default function Home(){
    return(
    <div className="home-one">
    <div className="home-two">
        <img className="img" src="../animation.gif"/>
    <div className="hm-t">
        <h1 className="title">Ready To Use Derma Bot</h1>
    </div>
        <Link to="/chatbot">
        <button className="home-btn">Try the Bot</button>
        </Link>
    </div>
        
    </div>)
}