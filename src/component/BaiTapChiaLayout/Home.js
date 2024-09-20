import React, { Component } from 'react';
import HeaderDemo from './HeaderDemo';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class Home extends Component {

    
    render() {
        let style = {
            padding: 0
        }
        return (
            <div className='container-fluid'>
                <div className='row'>

                    <div className="col-12" style={style}>
                        <HeaderDemo></HeaderDemo>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-4 " style={style}>
                        <Navigation></Navigation>
                    </div>
                    <div className="col-8" style={style}>
                        <Content></Content>
                    </div>
                </div>
                <div className='row'>

                    <div className="col-12" style={style}>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;