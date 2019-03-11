import React, {Component} from 'react';
import './index.less'

class SearchForm extends Component {
    render() {
        return (
            <div>
                <div className="hero-image">
                    <div className="title">
                        <h1>The quickest way to find a JOB</h1>
                    </div>
                    <form>
                        <button type="submit">Get Started</button>
                    </form>
                    <div className="description">
                        <h1 id="how_it_works"> How It Works</h1>
                        <div id="img1">
                            <div className="icon" id="icon1"/>
                            <h1>Pick the job you want</h1>
                            <h2>View wage, schedule, commute and benefits</h2>
                        </div>
                        <div id="img2">
                            <h1>Sign Up and Apply</h1>
                            <h2>Apply to any open role</h2>
                        </div>
                        <div id="img3">
                            <h1>Find your perfect job</h1>
                            <h2>We're help you to find a perfect job by providing you data</h2>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchForm;


// TODO:
// 2. Add server (stub server -- express -- json file)
// 3. Remove Register link and and only Login where it will ask to register
// 4. Menu text more bigger and color more attractive
// 5. Add logo
// 6. Write below photo the information about website
// 7. Add links from buttons
// 8. Connect to API
// 9. Search page with more properties and results page
// 10. Authorization
// 11. Profile page
// 12. Statistics page
// 13. Use UI kit
