import React, {Component} from 'react';

class DateClock extends Component{
  state = {
    time: new Date(),
    date: ''
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    this.setState({
      date: date
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  render(){
    return(
      <div className="date-clock mt-4">
        <span className="current_time_date">
          <span>{this.state.date}</span>&nbsp;<span>{this.state.time.toLocaleTimeString()}</span>
        </span>
      </div>
    )
  }
}

export default DateClock;