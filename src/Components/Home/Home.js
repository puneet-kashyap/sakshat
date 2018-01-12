import React from 'react';
import Typography from 'material-ui/Typography';
import Youtube from '../Utils/youtube';
import Carousel from '../Utils/carousel';
import Hidden from 'material-ui/Hidden';

const Home = () => {
  return(
    <div >
      <Hidden smUp>
        <Carousel sliderImages='small'/>
      </Hidden>
      <Hidden only="xs">
        <Carousel sliderImages='big'/>
      </Hidden>
      <div className="row col-md-offset-1 col-md-10">
          <Typography type="display3" component="h1" color="primary" align="center" style={{'padding':'25px'}}>
            Sakshat
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            Black bows is a pilot project from an electronics engineer with a zest for electronic music.
            6 years back, the artist started his musical journey by following his hobby.
            Gradually this little hobby of his's turned into his passion which inspired him into learning more about music
            and henceforth started his own independent path in the composition of Electronic, Dubstep and Trance.
          </Typography>
          <Typography paragraph type="headline" style={{'padding':'0px 20px'}}>
            So, what is their to wait for ?
            Let's groove on with him and be his companion in this musical journey.
            Hit like and join him for more of his upcoming compositions.
            Each of your like and appreciation would be celebrated with a jump of joy and a big smile.
            Cheers!
          </Typography>
      </div>
      <div className="row col-md-offset-1 col-md-10" >
        <Youtube src="https://www.youtube.com/embed/3ZHsY3fZuo8"/>
      </div>
    </div>
  )
}

export default Home;
