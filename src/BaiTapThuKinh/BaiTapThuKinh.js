import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json'
import './BaiTapThuKinh.css'
class BaiTapThuKinh extends Component {

    //những gì thay đổi thì dùng state
    state = {
        glassesCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img onClick={() => {this.changeGlasses(glassesItem)}} alt='glassesItem' className='ml-2 p-2 border border-width-1' style={{width: '110px', cursor: 'pointer'}} key={index} src={glassesItem.url} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }

    render() {
        const keyFrame = `@keyframes animateChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity: 0;
            }
            to {
                width: 150px;
                transform: rotate(0deg);
                opacity: .7
            }
        }`

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '71px',
            opacity: '.7',
            transform: 'rotate(0deg)',
            animation: `animateChangeGlasses${Date.now()} 1s`,
        }

        const inforGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            textAlign: 'left',
            height: '105px',
            backgroundColor: 'rgba(255, 137, 0, .5)'
        }

        return (
            <div style={{backgroundImage: 'url(./glassesImage/background.jpg)', minHeight: '2000px', backgroundSize:'1500px'}}>

                <style>
                    {keyFrame}
                </style>

                <div style={{backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px'}}>
                    <h3 
                        className='text-center text-light p-5'
                        style={{backgroundColor: 'rgba(148, 0, 211, .5)'}}
                    >
                        Try glass App Online
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className='position-absolute' style={{width:'250px'}} src="./glassesImage/model.jpg" alt="model.jpg" />
                                    <img style={styleGlasses} className='position-absolute glassesStyle' src={this.state.glassesCurrent.url} alt="" />
                                    <div style={inforGlasses} className="position-relative">
                                        <span 
                                            className='font-weight-bold '
                                            style={{color: '#AB82FF', fontSize: '17px'}}
                                        >
                                            {this.state.glassesCurrent.name}
                                        </span>
                                        <br />
                                        <span style={{fontSize: '12px', fontWeight: '400'}}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{width:'250px'}} src="./glassesImage/model.jpg" alt="model.jpg" />
                            </div>
                        </div>
                    </div>
                    {/* div chứa các kính */}
                    <div className='bg-light container text-center mt-5 d-flex justify-content-center'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapThuKinh;