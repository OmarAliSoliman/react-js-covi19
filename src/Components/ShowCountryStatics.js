import React, {Component} from 'react';

class ShoweCountryStaics extends Component{
  render(){
    return(
      <div className="show-card-info mt-3">
        <div className="show_card_info_img"> <img src={this.props.flag} /> </div>
        <div className="card main-card shadow p-2 m-2">
          <div className="card-body">
            <h5 className="card-title">Confirmed Cases</h5><span className="card-state">{this.props.countryCases}</span>
          </div>
        </div>
        <div className="card shadow p-2 m-2">
          <div className="card-body">
            <h5 className="card-title">Today Cases</h5><span className="card-state">{this.props.todayCases}</span>
          </div>
        </div>
        <div className="card card-m-bottom shadow p-2 m-2">
          <div className="card-body">
            <h5 className="card-title">All Death</h5><span className="card-state">{this.props.countryDeath}</span>
          </div>
        </div>
        <div className="clear"></div>
      </div>
     )
  }
}

export default ShoweCountryStaics