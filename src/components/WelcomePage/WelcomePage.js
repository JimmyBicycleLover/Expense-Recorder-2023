import React from "react";
import "./WelcomePage.css";
import { Link} from "react-router-dom";
const WelcomePage = () => {
    
    return(
        <div>
           <div className="one">
                <svg width="1000" height="300px">
                    <text x="50%" y="50%"  fill="#FF6F59" className="logo">Expense Recorder
                    </text>
                </svg>
            <button className="link"><Link to="/HomePage" style={{textDecoration: 'none', color:'white'}}>Enter My Recorder</Link></button>
            
            </div>
        </div>
    )
}
export default WelcomePage;