import React, { Component } from 'react';
import HeaderDemo from '../component/BaiTapChiaLayout/HeaderDemo';

class DataBinding extends Component {

    //tạo 1 thuộc tính của đối tượng Component
    name = 'huytn99'

    //thuộc tính kiểu obj 
    student = {
        name: 'song lê',
        classroom: '4B'
    }

    //phương thức (hàm) của obj Component
    //tất cả các hàm render đều phải trả về component jsx 
    renderImage = () => {
        return <img src='https://i1-thethao.vnecdn.net/2024/04/20/u23-jpeg-1713623886-1713623907-9514-1713623922.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=d4BceBMySQtgSjoD2P467w'/>
    }

    rederMultiComponent = () => {
        return <HeaderDemo></HeaderDemo>
    }

    render() {

        //biến của hàm render 
        const school = 'cyberlearn'


        return (
            <div>
                <h1>
                    hello {this.name} - school:{school}
                </h1>

                <h1>binding object</h1>
                <h1>hello {this.student.name} - classroom {this.student.classroom}</h1>
                <h3>Binding function</h3>
                {this.renderImage()}
                {this.rederMultiComponent()}
            </div>
        );
    }
}

export default DataBinding;