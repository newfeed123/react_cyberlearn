import React, { Component } from 'react';
import './BaiTapChonXeNangCao.css';
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';

class BaiTapChonXeNangCao extends Component {

    state = {
        carCurrent: {
            "id": 4,
            "title": "Rallye Red",
            "type": "Metallic",
            "img": "./images/icons/icon-red.jpg",
            "srcImg": "images-red/images-red-1/",
            "color": "Red",
            "price": "22,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
              {
                "idWheel": 1,
                "srcImg": "images-red/images-red-1/"
              },
              {
                "idWheel": 2,
                "srcImg": "images-red/images-red-2/"
              },
              {
                "idWheel": 3,
                "srcImg": "images-red/images-red-3/"
              }
            ]
        }
    };

    changeCar = (newCar) => {
        console.log('Changing car to:', newCar);  // Check the new car data
        this.setState({
            carCurrent: newCar
        });
    };

    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return (
                <div onClick={() => {this.changeCar(item)}} className='row mt-1 border border-color-default m-3' style={{cursor: 'pointer'}} key={index}>
                    <div className="col-2">
                        <img className='p-3' style={{width:'100%'}} src={item.img} alt={index} />
                    </div>
                    <div className="col-10">
                        <h3 className='p-3'>{item.title}</h3>
                        <span className='p-3 pt-0 mt-0'>{item.type}</span>
                    </div>
                </div>
            );
        });
    };

    changeWheel = (newWheel) => {   
        //tìm trong state hiện tại
        //mỗi lần click thì truyền bánh xe mới, check trong chiếc xe hiện tại có bánh đó không, có thì trả về
        //thật ra là thay luôn hình
        let objWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel)
        if(objWheel !== -1){
            this.setState({
                //nếu tìm thấy lấy ra source hình ảnh từ this.state.carCurrent
                carCurrent: {...this.state.carCurrent, srcImg: objWheel.srcImg}
            })
        }
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return (
                <div style={{cursor: 'pointer'}} onClick={() => {this.changeWheel(item)}} className='row mt-1 border border-color-default m-3' key={index}>
                    <div className="col-2">
                        <img className='p-3' style={{width:'100%'}} src={item.img} alt={index} />
                    </div>
                    <div className="col-10 d-flex flex-colum align-items-center">
                        <span className='p-3'>{item.title}</span>
                    </div>
                </div>
            );
        });
    };

    componentDidMount = () => {
        let tagScript = document.createElement('script');
        tagScript.src = "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";
        document.querySelector("#appendScript").appendChild(tagScript);
    };

    componentDidUpdate = () => {
        //hàm này chạy sau khi state thay đổi (tự kích hoạt sau render)
        //không được sử dụng setState tại component này vì infinity loop
        document.querySelector("#carCurrent").innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";
        let tagScript2 = document.createElement('script');
        tagScript2.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6";
        // tagScript.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";

        document.querySelector("#appendScript").innerHTML = '';
        document.querySelector("#appendScript").appendChild(tagScript);
        document.querySelector("#appendScript2").innerHTML = '';
        document.querySelector("#appendScript2").appendChild(tagScript2);

        console.log('Updated car data:', this.state.carCurrent);  // Check the updated state
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <div
                                style={{minWidth: '100%'}}
                                className="cloudimage-360"
                                id="carCurrent"
                                data-folder={"./images/" + this.state.carCurrent.srcImg}
                                data-filename-x="civic-{index}.jpg"
                                data-amount-x="8"
                            ></div>
                            <div id='appendScript'>
                            </div>
                            <div id='appendScript2'>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <h5 className='card-header'>Exterior color</h5>
                            <table className="table border border-color-light" border="1">
                                <tbody>
                                <tr>
                                    <td>Color</td>
                                    <td>{this.state.carCurrent.color}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{this.state.carCurrent.price}$</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>{this.state.carCurrent.engineType}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-left">
                            <h5 className='card-header'>Exterior color</h5>
                            <div className="container-fluid">
                                <div className="container-fluid">
                                    {this.renderIcon()}
                                </div>
                            </div>
                        </div>
                        <div className="card text-left mt-2">
                            <h5 className='card-header'>Exterior color</h5>
                            <div className="container-fluid">
                                <div className="container-fluid">
                                    {this.renderWheels()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapChonXeNangCao;
