import React, { Component } from 'react';

class HandleEvent extends Component {

    //Định nghĩa hàm sự kiện btn click

    handleClick = (name) => {
        alert("ok " + name)
    }

    //Truyền tham số xử lý khi click
    handleClickParam = (param, button) => {
        console.log("param: " + param)
        console.log("button: " + button.target)
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.handleClick}>Click me!!!</button> */}

                <button onClick={() => {
                    this.handleClick("huy")
                }}>Click me!!!</button>
                <button onClick={this.handleClickParam.bind(this, "hello men")}>Click me 2 !!!</button>
            </div>
        );
    }
}

export default HandleEvent;