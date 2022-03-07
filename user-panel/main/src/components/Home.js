import React from 'react';
import { Link } from "react-router-dom";
import ShippingIcon from '@material-ui/icons/LocalShipping';
import SupportIcon from '@material-ui/icons/ContactSupport';
import CancelIcon from '@material-ui/icons/Cancel';
export default function Home() {
    const styles = { largeIcon: { width: 30, height: 30, marginRight: 3 }
    };
    return (
        <section>
            <div className="landing-box">
                <div>
                    <h1>Welcome to FISH LANDIA....</h1>
                    <p>See the fish, feel the thrill, catch the rewards.</p>
                    <Link to="/products">Shop Now</Link>
                </div>
                <img src="https://i.pinimg.com/originals/97/7e/d9/977ed90d51b801891e07b99740d68a9e.gif" alt="landing-pic" />
            </div>
            <div className="features">
                <div className="features-card">
                    <p className="features-head"><ShippingIcon style={styles.largeIcon} /> Free Home Delivery</p>
                    <p className="features-para">No shipping Charges on Orders above &#8377; 500.</p>
                </div>
                <div className="features-card">
                    <p className="features-head"><CancelIcon style={styles.largeIcon} /> Easy Cancellation</p>
                    <p className="features-para">Cancel anytime as per your needs.</p>
                </div>
                <div className="features-card">
                    <p className="features-head"><SupportIcon style={styles.largeIcon} /> 24x7 Customer Care</p>
                    <p className="features-para">We provide 24*7 Customer Care support for feedbacks, suggestions and complaints.</p>
                </div>
            </div>
        </section>
    )
}
