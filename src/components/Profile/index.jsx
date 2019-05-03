import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";
import {Link} from "react-router-dom";
import {grommet} from "grommet/themes";
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  CheckBox,
} from "grommet";


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
    console.log(this.props)
  }

  render() {
    const edit = false;

    return (
      <div className="profile-container">
        <div className="profile-header">
          <img alt="img"/>
          <p className="candidate">Candidate: </p>
          <p className="user-name"> Jane Doe </p>
          <Link to={'/editProfile'}><Button>Edit</Button></Link>
        </div>
        <form>
          <div className="profile-body">
            <p>Full name: <span>Jane Doe<input readOnly value='Jane' type="text" className={edit ? 'edit' : ''}/></span></p>
            <p>Gender: <span>Female</span></p>
            <p>Birth date: <span>13.02.1998</span></p>
            <p>Country: <span>Russia, Tatarstan</span></p>
            <p>Phone: <span>+7 888 567 48 90</span></p>
            <p>Email: <span>j.doe@gmail.com</span></p>
            <p>Graduated from: <span>Innopolis University</span></p>
            <p>Portfolio: <a href="#">View portfolio</a></p>
          </div>
          <div>111</div>
          <div>222</div>
          <span>111</span>
          <span>222</span>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {alert, profile} = state;
  return {
    alert,
    profile,
  };
}

export default connect(mapStateToProps, null)(Profile);

