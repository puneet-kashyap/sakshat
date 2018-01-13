import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Hidden from 'material-ui/Hidden';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Home from 'material-ui-icons/Home';
import Album from 'material-ui-icons/Album';
import Slideshow from 'material-ui-icons/Slideshow';
import LibraryMusic from 'material-ui-icons/LibraryMusic';
import { withStyles } from 'material-ui/styles';
import RightNavigation from './rightNavigation';

const styles = {
  label: {
    fontSize: '14px'
  },
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
  return (
    <div >
      <AppBar position="static">
        <Toolbar  style={{'paddingRight':'0px'}}>
          <a href="/">
            <img src={require('../../Images/Sakshat_logo.png')} className="img-responsive" style={{'padding':'10px'}} alt="Sakshat logo" />
          </a>
          <Typography type="title" color="inherit" style={{'flex':'1'}} >
            <Hidden smDown>
              <Tabs centered>
                  <Tab icon={<Home />} label="Home" href="/" classes={{label: classes.label}}/>
                  <Tab icon={<Slideshow />} label="Albums" href="/Albums" classes={{label: classes.label}}/>
                  <Tab icon={<LibraryMusic />} label="Gallery" href="/Gallery" classes={{label: classes.label}}/>
                  <Tab icon={<PersonPinIcon />} label="Contact Me" href="/Contact" classes={{label: classes.label}}/>
                  <Tab icon={<Album />} label="Bookings" href="/Bookings" classes={{label: classes.label}}/>
              </Tabs>
            </Hidden>
          </Typography>
          <Typography type="headline" align="center" color="inherit" style={{'display':'flex','alignItems':'inherit'}}>
              <RightNavigation />
          </Typography>
        </Toolbar>
        <Hidden mdUp >
          <Typography type="title" align="center" color="inherit" style={{'display':'flex','alignItems':'inherit'}}>
            <Tabs indicatorColor="accent" type="display3"
            textColor="inherit" scrollable fullWidth>
              <Tab icon={<Home />} label="Home" href="/" classes={{label: classes.label}}/>
              <Tab icon={<Slideshow />} label="Albums" href="/Albums" classes={{label: classes.label}}/>
              <Tab icon={<LibraryMusic />} label="Gallery" href="/Gallery" classes={{label: classes.label}}/>
              <Tab icon={<PersonPinIcon />} label="Contact Me" href="/Contact" classes={{label: classes.label}}/>
              <Tab icon={<Album />} label="Bookings" href="/Bookings" classes={{label: classes.label}}/>
            </Tabs>
          </Typography>

        </Hidden>
      </AppBar>
    </div>
  )};
}

// export default Header;
export default withStyles(styles)(Header);
