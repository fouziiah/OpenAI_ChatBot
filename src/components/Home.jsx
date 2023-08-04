import { Link } from "react-router-dom";


export default function Home(){
    return(
    <div className="home-one">
    <div className="home-two">
        <img className="img" src="../animation.gif"/>
        <img className="face-img" src="../face.png"/>
    <div className="hm-t">
        <h1 className="title">Ready To Use Derma Bot</h1>
        <p>Get expert answers to your skin-related questions in real-time. Explore a wealth of skincare knowledge at your fingertips.</p>
    </div>
        <Link to="/chatbot">
        <button className="home-btn">Try the Bot</button>
        </Link>

    </div>
        
    </div>)
}