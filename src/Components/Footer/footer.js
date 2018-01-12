import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import { connect } from 'react-redux';

import './footer.css';

const Footer = (props) => {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-around" alignItems="center" spacing={24} style={{ margin: '5px' }}>

            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                {props.owner.owner1.name}
              </Typography>
              <Typography align='center' type="headline"  color="inherit">
                  <a href="tel:+917696571231" className="hyper-link">
                    {props.owner.owner1.phone}
                  </a>
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:${props.owner.owner1.name}?Subject=${props.owner.owner1.name}`}
                    className="hyper-link" target="_top">
                    {props.owner.owner1.email}
                  </a>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} >
              <Typography align='center' type="display1"  color="inherit" >
                <div className="fb-like"
                  data-href="https://www.facebook.com/YoungIndianDrummer"
                  data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true">
                </div>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography align='center' type="display1"  color="inherit" style={{ 'padding': '8px' }}>
                {props.owner.owner2.name}
              </Typography>
              <Typography align='center' type="headline"  color="inherit">
                <a href="tel:+919814581786" className="hyper-link">
                  {props.owner.owner2.phone}
                </a>
              </Typography>
              <Typography align='center' type="headline"  color="inherit" >
                  <a href={`mailto:${props.owner.owner2.email}?Subject=${props.owner.owner2.name}`}
                    className="hyper-link" target="_top">
                    {props.owner.owner2.email}
                  </a>
              </Typography>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
      <Typography align='center' type="headline"  color="inherit" >
          Copyright &copy; Sakshat {new Date().getFullYear()}<br/>
          Built with 💖 by <u><a href={`mailto:kashyap@sakshat.com`}>Sakshat's</a></u>  Fan Club.
      </Typography>
    </div>
  );
}

const mapStateToProps = (state) => {
   return {owner: state.users};
}

export default connect(mapStateToProps)(Footer);
