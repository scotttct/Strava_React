import React from "react";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <div class="container text-left bg-dark text-light p-3 pl-5">
            <div class="row">
                <h1 class="col-md-9">ST-Activities</h1>
                <button class="btn btn-primary col-md-2 pr-5 "  onClick={handleLogin}>Connect with Strava</button>
            </div>
        </div>
    );
};

export default Home;