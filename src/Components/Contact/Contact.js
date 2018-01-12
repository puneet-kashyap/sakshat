import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Typography from 'material-ui/Typography';
import Card, { CardMedia, CardHeader, CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import Hidden from 'material-ui/Hidden';
import ReactBotUI from 'react-bot-ui';

import Facebook from '../Utils/facebook';
import './contact.css';

const Contact = (props) => {
  return (
    <div>
      <Header />
      <div className="col-md-offset-3 col-md-6 text-center" style={{'padding':'25px'}}>
          <Card raised className="img-responsive">
            <Typography type="display3" component="h1" color="primary" style={{'paddingTop':'25px'}}>
              {/* {props.owner.owner1.name} */}
              Sakshat
            </Typography>
            <CardHeader
              title="Young Indian Drummer."
              color="primary"
              style={{'paddingTop':'5px'}}
            />
            {/* <img src={require('../../Images/profile/profile2.jpg')}
              className="img-responsive center-block"
              style={{'maxHeight':window.innerHeight/2}}
              alt={props.owner.owner1.name}/> */}
            <CardContent>
              <Typography type="display1" component="h4" color="secondary">
                  {props.owner.owner1.address1}
                  <br/>{props.owner.owner1.address2}
                  <br/><b>Ph.# </b><a href="tel:+917696571231">{props.owner.owner1.phone}</a>
                  <br/><b>Email: </b>
                  <a href={`mailto:${props.owner.owner1.email}?Subject=${props.owner.owner1.name}`} target="_top">{props.owner.owner1.email}</a>
                  <br/>
              </Typography>
            </CardContent>
          </Card>
      </div>
      <div className="col-md-offset-3 col-md-6 text-center">
        <Card raised style={{'padding':'10px'}}>
          <ReactBotUI
            title={'Chat with us.'}
            dialogflow={{accessToken: process.env.REACT_APP_BOT_ID}}
            dialogHeightMax={350}
            isVisible={true}
            isUserHidden={false}
          />
        </Card>
      </div>
      <Hidden mdUp>
      <div className="col-md-offset-3 col-md-6 text-center" style={{'padding':'25px'}}>
        <Card raised style={{'padding':'25px'}}>
        <Facebook />
        </Card>
      </div>
      </Hidden>
      <Card raised>
        <CardMedia
          style={{'padding':'10px','minHeight':'500px'}}
          component='iframe'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283748.7611334782!2d76.94178736453739!3d28.634952305312577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C+India!5e0!3m2!1sen!2sca!4v1515789860423"
          title="Sakshat Map"
          className="embed-responsive-item"
          frameBorder="0"
          allowFullScreen
        />
      </Card>
      <Footer />

    </div>
  );
}

const mapStateToProps = (state) => {
   return {owner: state.users};
}

export default connect(mapStateToProps)(Contact);
