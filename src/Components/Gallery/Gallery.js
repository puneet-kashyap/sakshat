import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Youtube from '../Utils/youtube'
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const youtubeVideos = [
  "https://www.youtube.com/embed/3ZHsY3fZuo8",
  "https://www.youtube.com/embed/Db9lj3-ihlw",
  "https://www.youtube.com/embed/prQfQpWquH4",
  "https://www.youtube.com/embed/GdtYapoF3gA",

  "https://www.youtube.com/embed/kg9rrqhAGp4",
  "https://www.youtube.com/embed/OF-Yw3MXdj0",
  "https://www.youtube.com/embed/kEqllwLB4MQ",
  "https://www.youtube.com/embed/RvS9iPnjxho",
  "https://www.youtube.com/embed/JHZvCRLdDGE",
]

const Gallery  = () => {
  return (
    <div>
      <Header />
      <div>
        <Typography type="display3" component="h1" color="primary" style={{'padding':'25px','text-align':'center'}}>
          Sakshat's Gallery.
        </Typography>
          {youtubeVideos.map(item =>
            <div key={item}  className="col-md-4 text-center" style={{'padding':'15px'}}>
              <Card raised>
                <Youtube src={item}/>
              </Card>
            </div>
          )}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
