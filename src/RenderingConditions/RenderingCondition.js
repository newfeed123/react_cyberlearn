import React, { Component } from 'react';

class RenderingCondition extends Component {

    //thuộc tính
    login = true
    userName = "huytn"

    renderContent = () => {
        if(this.login){
            return <p>Hello {this.userName}</p>
        }
        return <button>Đăng nhập</button>
    }

    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        );
    }
}

export default RenderingCondition;