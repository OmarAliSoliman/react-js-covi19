import React, {Component} from 'react';
import {getCountry} from '../Api/GetData';
import DateClock from '../Components/DateClock';
import Footer from '../Components/Footer';


class CountryInfo extends Component{

  state = {
    country: {},
    flag: '',
    iso3: ''
  }

  componentDidMount = () =>{
    const countryId = this.props.match.params.id;
    getCountry()
    .then((response)=>{
      this.setState({
        country: response.data[countryId],
        flag:  response.data[countryId].countryInfo.flag,
        iso3:  response.data[countryId].countryInfo.iso3
      })
    })
  }

  render(){
    return(
      <div className="country-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
             <div className="country_info_content text-center">
                <DateClock />
                <img className="mt-3" src={this.state.flag}  alt="country-img"/>
                <h4> {this.state.country.country}({this.state.iso3}) </h4>
             </div>
            </div>
          </div>
          <div className="row text-center mt-4 text-capitalize">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>all cases</h5>
                <p> {this.state.country.cases} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>today cases</h5>
                <p> {this.state.country.todayCases} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>all deaths</h5>
                <p> {this.state.country.deaths} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>today deaths</h5>
                <p> {this.state.country.todayDeaths} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>recovered</h5>
                <p> {this.state.country.recovered} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>active</h5>
                <p> {this.state.country.active} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>critical</h5>
                <p> {this.state.country.critical} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>cases per one million</h5>
                <p> {this.state.country.casesPerOneMillion} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>deaths per one million</h5>
                <p> {this.state.country.deathsPerOneMillion} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>tests</h5>
                <p> {this.state.country.tests} </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mt-2 pt-3 shadow p-1">
                <h5>tests per one million</h5>
                <p> {this.state.country.testsPerOneMillion} </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default CountryInfo;