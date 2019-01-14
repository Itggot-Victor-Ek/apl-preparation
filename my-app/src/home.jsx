import React, { Component } from 'react';
import logo from './ICA-logotyp.png';

class Home extends Component {
    render() {
        return(
            <div className="container--main" >
                <img src={logo} className="logo" alt="logo" />
            </div>
        )
    }
}
export default Home;