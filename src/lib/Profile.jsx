import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  // handleTroubleshootingConfirmation(){
  //   this.setState({formVisibleOnPage: true});
  // }
  render(){

    var scoresStyle = {
      borderStyle : 'solid',
      margin: '10px',
      padding: '10px',
    }
    return (
      <div style={scoresStyle}>
        <h2>Profile</h2>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;