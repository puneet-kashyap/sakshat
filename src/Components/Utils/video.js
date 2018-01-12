import React from 'react';
import Card , {CardMedia, CardHeader} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Video = (props) => {
  return (
    <div className="col-md-4 text-center" style={{'padding':'15px'}}>
      <Card raised>
        <Typography type="display3" component="h1" color="primary" style={{'paddingTop':'25px'}}>
          {props.title}
        </Typography>
        <CardHeader
          subheader={props.subHeader}
        />
        <CardMedia
          component='video'
          src={props.src}
          title="Sakshat video"
          className="embed-responsive-item"
          style={{'margin':'10px', 'width':'95%', 'height':'350px'}}
          type="video/mp4"
          controls
        />
      </Card>
    </div>
  )
}

export default Video;
