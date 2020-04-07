import React, {Component} from 'react';
import Footer from '../Components/Footer';
import Logo1 from '../images/about/about-img.jpg';
class About extends Component{
  render(){
    return(
      <div className="about-page mt-5">
        <div className="container-fluid">
        <h4 className="about-header p-4 shadow">About Covid-19</h4>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="about-paragraph">
                <p className="p-4 rounded">
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

                The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).

                At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.

                Stay informed:
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="about-img mt-4">
                <img className="rounded" src={Logo1} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;