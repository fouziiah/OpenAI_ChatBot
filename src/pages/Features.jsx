import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function Features(){
    return(
        <div className="features">

            <div className="ft-title">
            <h1>Features</h1>
            </div>

        <div className="all-cards">
            <div className="card-one">
            <div className="ft-one">
                <div className="icon">
                <FontAwesomeIcon icon={faHeadset} />
                </div>
                <h3>Instant Support</h3>
                <p>Experience real-time solutions with our chatbot's Instant Support feature. No more delays or frustrating waits. Whether you need quick answers, assistance, or just a friendly chat, our chatbot is here to lend a virtual helping hand. </p>
            </div>
            </div>
            <div className="card-two">
            <div className="ft-two">
                <img className="img-one" src="../24-7.png" />
                <h3>24/7 Availability</h3>
                <p>our chatbot's 24/7 availability. No matter the hour or time zone, our AI assistant is ready to assist you with instant responses and valuable insights.</p>
            </div>
            </div>
            <div className="card-three">
            <div className="ft-three">
                <img className="img-two" src=" ../natural-language-processing.png"/>
                <h3>Natural Language Processing</h3>
                <p>Interact effortlessly with our chatbot using natural language.simply chat naturally and let our AI do the rest. Through advanced natural language processing.</p>
            </div>
            </div>
         </div>
        </div>
    )
}