import React, {Component} from 'react';
import Youtube from '../Utils/youtube';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';

class PyarAlbum extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded:false
    }
  }

  clickedIcon = () => {
    if (this.state.expanded){
      this.setState({expanded:false})
    } else {
      this.setState({expanded:true})
    }
  }

  render() {
  return (
    <div>
      <Card raised style={{'padding':'25px'}}>
        <Typography type="display3" component="h1" color="primary" style={{'padding':'25px'}}>
          Sakshat in Action.
        </Typography>
        <CardHeader
          style={{'paddingBottom':'0px'}}
          subheader="Watch full HD video of Sakshat."
        />
        <Youtube src="https://www.youtube.com/embed/3ZHsY3fZuo8"/>
        <CardContent>
          <Typography type="title" component="h1">
            Youth Anthem
          </Typography>
          <Typography paragraph>
            Rocking performance of Sakshat.
          </Typography>
        </CardContent>
        {/* <CardActions style={{"justifyContent":"space-around"}}>
          <Button dense
            color="primary"
            href="https://www.youtube.com/watch?v=3ZHsY3fZuo8&feature=youtu.be"
            target="_blank"
          >
            Share
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
  }
}

export default PyarAlbum;
