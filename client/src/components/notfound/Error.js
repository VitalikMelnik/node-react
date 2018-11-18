import React from "react";
import './_post_404.css'

class Error extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="error-cloud x1"></div>
                    <div className="error-cloud x1_5"></div>
                    <div className="error-cloud x2"></div>
                    <div className="error-cloud x3"></div>
                    <div className="error-cloud x4"></div>
                    <div className="error-cloud x5"></div>
                </div>

                <div className='error-center-text'>
                    <div className='error-404'> 404</div>
                    <div className='error-1'>THE PAGE</div>
                    <div className='error-2'>WAS NOT FOUND</div>
                    <a className='error-btn' href='/'>BACK TO BLOG</a>
                </div>
            </div>

        )
    }
}

export default Error