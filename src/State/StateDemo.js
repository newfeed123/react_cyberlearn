import React, { Component } from 'react';

class StateDemo extends Component {

    //thuộc tính state : có sẵn của class Component, là 1 object giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state = {
        status: false
    }

    //phương thức setState(): là phương thức có sẵn của class Component, giúp thay đổi giá trị state và render lại giao diện


    userLogin = {
        name: 'huytn',
        age: 20,
    }
    
    login = () => {
        //ko dùng cách này để thay đổi giá trị trong state mà phải dùng hàm setState()
        // this.state.status = true 

        //tạo 1 state mới (1 object)
        let newState = {
            status: true
        }
        this.setState(newState, () => {
            console.log(this.state)
        })
    }

    renderUserLogin = () => {
        if(this.state.status){
            return <div className='text-center'>{this.userLogin.name}</div>
        }
        return <button onClick={() => {this.login()}}>Đăng nhập</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        );
    }
}

export default StateDemo;