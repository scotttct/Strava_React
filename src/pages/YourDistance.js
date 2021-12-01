import React from "react";
import { connect } from "react-redux";

const YourDistance = ({ user, returnTokens }) => {
    return (
        <div class="container">
            <img src={returnTokens.athlete.profile} alt="profile"/>
            <h1>Hi, {returnTokens.athlete.firstname}!</h1>
            <h2>All Run Totals: {user.data.all_run_totals.distance} Meters</h2>
            <h2>All Ride Totals: {user.data.all_ride_totals.distance} Meters</h2>
            <h2>All Swim Totals: {user.data.all_swim_totals.distance} Meters</h2>
            
        </div>
    );
};  

const mapStateToProps = (state) => {
    return {
        user: state.user,
        returnTokens: state.returnTokens,
    };
};

export default connect(mapStateToProps)(YourDistance);
