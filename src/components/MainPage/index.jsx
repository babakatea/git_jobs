import React, {Component} from 'react';
import './index.less'
import Link from "react-router-dom/es/Link";

function MainPage() {
    return (
        <div>
            <div className="hero-image">

                <div className="title">
                    <h1>GitHub Jobs</h1>
                    <label>The quickest way to find your place</label>
                </div>
                <form>
                    <Link to="/login">
                        <button type="submit">Get Started</button>
                    </Link>
                </form>
                <div className="description">
                    <h1 id="how_it_works"> How it works?</h1>
                    <h4>
                        Git-jobs is a website for searching vacancies for IT specialists. It is using
                        the existing API from Github, however, it has detailed information about job's
                        statistics
                        and a user-friendly interface.
                    </h4>
                    <div className="divider divider-default"/>
                    <div id="img1">
                        <div className="icon" id="icon1"/>
                        <h1>Pick the job you want</h1>
                        <h4>View wage, schedule, commute and benefits</h4>
                    </div>
                    <div id="img2">
                        <div className="icon" id="icon2"/>
                        <h1>Sign Up and Apply</h1>
                        <h4>Apply to any open role</h4>
                    </div>
                    <div id="img3">
                        <div className="icon" id="icon3"/>
                        <h1>Find your perfect job</h1>
                        <h4>We're help you to find a perfect job by providing you data</h4>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MainPage;

