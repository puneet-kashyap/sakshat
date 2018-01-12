import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import InquiryThanks from './inquiryThanks';
import { writeInquiryData } from '../../fire';

class InquiryForm extends Component {
  constructor(props){
    super(props);
    this.state={
      form:'blank',
      date:'2018-01-10',
      time: '19:30'
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  submit = () => {
    this.setState({form:'filled'})
    console.log(this.state);
    writeInquiryData(this.state);
  }
  render () {
    if (this.state.form === 'blank') {
      return (
        <div className="row col-md-offset-4 col-md-4" style={{'padding':'25px'}}>
          <Paper style={{'padding':'10px'}}>
            <Typography type="display3" component="h1" color="primary" style={{'paddingBottom':'10px'}}>
              Booking Inquiry
            </Typography>
            <p className="text-left">
              Please enter your information to book Sakshat's shows and performance.
            </p>
            <form onSubmit={this.submit}>
                <TextField required
                  name="Name"
                  label="Your Name"
                  placeholder="First and Last Name"
                  margin="dense"
                  fullWidth={true}
                  onChange={this.handleChange}
                />
                <TextField required
                  name="Phone"
                  label="Phone No."
                  placeholder="e.g. +91-416-xxx-xxxx"
                  margin="dense"
                  fullWidth={true}
                  onChange={this.handleChange}
                />
                <TextField required
                  name="Email"
                  label="Email Address"
                  placeholder="Your email address"
                  margin="dense"
                  fullWidth={true}
                  onChange={this.handleChange}
                />
                <TextField required
                  name="date"
                  label="Date"
                  type="date"
                  defaultValue={this.state.date}
                  fullWidth={true}
                  onChange={this.handleChange}
                  style={{'margin':'8px 0px 4px 0px'}}
                />
                <TextField required
                  name="time"
                  label="Time"
                  type="time"
                  defaultValue={this.state.time}
                  fullWidth={true}
                  onChange={this.handleChange}
                  style={{'margin':'8px 0px 4px 0px'}}
                />
                <TextField required
                  name="Comments"
                  multiline
                  label="Comments"
                  rows="4"
                  type="time"
                  onChange={this.handleChange}
                  fullWidth={true}
                  style={{'marginBottom':'25px'}}
                />
                <Button raised
                  type="submit"
                  color="primary">
                  Submit
                </Button>
          </form>
        </Paper>
      </div>
      );
    } else {
      return (
        <InquiryThanks />
      )
    }
  }
}

export default InquiryForm;
