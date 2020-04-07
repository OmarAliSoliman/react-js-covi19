import React, {Component} from 'react';
import Typed from 'react-typed';
import SelectCountry from '../Components/SelectCountry';
import Footer from '../Components/Footer';
import Logo from '../images/logo-2.png';
import '../css/syle.css';

class Home extends Component{
  render(){
    return(
      <div className="home-page">
        <header>
          <div className="container-fluid">
          <img className="logo-animation" src={Logo} alt="logo" />
            <div className="slag">
            <h5 className="display-4">CoronaVirus Covid-19</h5>
            <img src={Logo} alt="logo" />
              <Typed
                  className="stay_slag ml-2"
                  strings={['Stay Home',
                  'Stay Safe',
                  'Save Your Self',
                    'Save your Country']}
                  typeSpeed={100}
                  fadeOutDelay={300}
                  fadeOut={true}
                  loop 
                />
            </div>
          </div>
        </header>
        {/* stay alert */}
        <div className="stay-alert">
          <SelectCountry />   
        </div>
        <Footer />
      </div>
    )
  }
}


export default Home;