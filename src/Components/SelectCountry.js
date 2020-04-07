import React, {Component} from 'react';
import {getCountry} from '../Api/GetData';
import ShoweCountryStaics from '../Components/ShowCountryStatics';
import DateClock from '../Components/DateClock';
import {Link} from 'react-router-dom';
import '../css/syle.css';

class SelectCountry extends Component{

  state = {
    countries: [],
    country: {},
    countryName:"",
    countryCases:0,
    countryDeath:0,
    todayCases: 0,
    flag: '',
    index: ''
  }

  componentDidMount =()=>{
    getCountry()
    .then((response)=>{
      this.setState({
        countries: response.data
      })
    })
  }

  updateCountry = (e) =>{
    this.setState({
      country: this.state.countries[e.target.value],
      index: e.target.value
    })

    // console.log(this.state.country);
  }

  updateCountryState = () =>{
    this.setState({
      countryCases: this.state.country.cases,
      todayCases: this.state.country.todayCases,
      countryDeath: this.state.country.deaths,
      flag: this.state.country.countryInfo.flag
    })
  }

  render(){
    return(
      <div className="select-country pt-5">
        <div className="container-fluid">
          <h5 className="text-capitalize stay_alert_header">stay alert</h5>
          <p className="text-capitalize stay_alert_slag">all statices found here</p>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <DateClock />
              <div className="form-group mt-3">
                <select className="form-control" id="exampleFormControlSelect1" defaultValue={"DEFAULT"} onChange={this.updateCountry}>
                  <option disabled value={"DEFAULT"}>select country</option>
                  {this.state.countries.map((country, index)=>(
                    <option key={index} value={index}>{country.country}</option>
                  ))}
                </select>
                <button className="search" onClick={this.updateCountryState}>Search</button>
                <div className="clear"></div>
                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div>
                <ShoweCountryStaics flag={this.state.flag}  countryCases={this.state.countryCases}  todayCases={this.state.todayCases} countryDeath={this.state.countryDeath}/>
                <div className="show-more text-capitalize mt-3">
                  <Link className="show_more_link" to={"/countryInfo/" + this.state.index}>More Information</Link>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div> 
    )
  }
}


export default SelectCountry;