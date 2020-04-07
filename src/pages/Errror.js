import React, {Component} from 'react';
import ErrorImage from '../images/error-page/error.svg'


class ErrorPage extends Component{
  render(){
    return(
      <div className="error-page">
        <div className="error_page_content">
          <img src={ErrorImage} className="img-fluid" alt="error" />
          <h5>Oops!</h5>
          <h6>404-page not found</h6>
          <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </div>
      </div>
    )
  }
}

export default ErrorPage;