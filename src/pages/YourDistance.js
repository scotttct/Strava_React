import React from "react";
import { connect } from "react-redux";

const YourDistance = ({ user, returnTokens }) => {
    return (
        <div class="container bg-dark text-light my-5 py-5 text-center shadow">
            <img src={returnTokens.athlete.profile} alt="profile"/>
            <h1 class="p-5">Hi, {returnTokens.athlete.firstname}!</h1>
            <div class="container text-start">
            <h2>All Run Totals: {user.data.all_run_totals.distance} Meters</h2>
            <h2>All Ride Totals: {user.data.all_ride_totals.distance} Meters</h2>
            <h2>All Swim Totals: {user.data.all_swim_totals.distance} Meters</h2>
            <hr/>
            <h3>Biggest Ride: {user.data.biggest_ride_distance} Meters</h3>
            <hr/>
            <h3>Recent Ride:</h3>
            <h4>Riding Time:  {user.data.recent_ride_totals.moving_time} Seconds</h4>
            <h4>Distance:  {user.data.recent_ride_totals.distance} Meters</h4>
            <h4>Elevation:  {user.data.recent_ride_totals.elevation_gain} Meters</h4>
            </div>
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
