import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar"

const YourDistance = ({ user, returnTokens }) => {
    return (
        <>
            <Navbar/>
            <div class="container bg-dark text-light my-2 pt-3 text-center shadow">
                <img src={returnTokens.athlete.profile} alt="profile"/>
                <h1 class="p-5">Hi, {returnTokens.athlete.firstname}!</h1>
            </div>
            <div class="container bg-dark text-light my-2 py-3 text-center shadow">
            <h3 class="p-4 bg-secondary shadow border-5">Aggregate Scores</h3>
                <div class="container text-start">
                <h4>All Run Totals: {user.data.all_run_totals.distance} Meters</h4>
                <h4>All Ride Totals: {user.data.all_ride_totals.distance} Meters</h4>
                <h4>All Swim Totals: {user.data.all_swim_totals.distance} Meters</h4>
                <hr/>
                <h3>Biggest Ride: {user.data.biggest_ride_distance} Meters</h3>
                <hr/>
                <h3>Recent Ride:</h3>
                <h4>Riding Time:  {user.data.recent_ride_totals.moving_time} Seconds</h4>
                <h4>Distance:  {user.data.recent_ride_totals.distance} Meters</h4>
                <h4>Elevation:  {user.data.recent_ride_totals.elevation_gain} Meters</h4>
                </div>
            </div>
        </>
    );
};  

const mapStateToProps = (state) => {
    return {
        user: state.user,
        returnTokens: state.returnTokens,
    };
};

export default connect(mapStateToProps)(YourDistance);
