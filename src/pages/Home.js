import React from "react";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect"

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <>
            <div class="container text-left bg-dark text-light p-3 pl-5">
                <div class="row">
                    <h1 class="col-md-9">ST-Activities</h1>
                    <button class="btn btn-secondary col-md-2 pr-5 "  onClick={handleLogin}>Connect with Strava</button>
                </div>
            </div>
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-header bg-secondary text-white">
                                <h3>About ST-Activities</h3> 
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Strava Activities Tracker</h4>
                                <p class="card-text">St-Activities is a Strava Activities tracker.</p>
                                <h5 class="card-text">By Signing into strava using the buttons provided you will be shown:</h5>
                                <div class="container px-5">
                                    <ul class="list-group">
                                        <li class="list-group-item list-group-item-secondary">Aggregate Data for your Strava Activities</li>
                                        <li class="list-group-item list-group-item-dark">A list of your last 10 activities</li>
                                        <li class="list-group-item list-group-item-secondary">A graph of your cycling Power, Heart Rate and/or Speed</li>
                                        <li class="list-group-item list-group-item-dark">Enter new Strava Activities manually</li>
                                    </ul>
                                    </div>
                                <button class="btn btn-dark col-md-2 pr-5 m-4 "  onClick={handleLogin}>Connect with Strava</button>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col">
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="container bg-dark text-center text-white fixed-bottom py-3 fs-4 ">
            <footer>&copy;tomassetti.net 2021</footer>
            </div>
            
        </>
    );
};

export default Home;