import React, { Component } from 'react';
import Child from './Child';
import "./Styling.css"
import style from './Styling.module.css'
class Styling extends Component {
    render() {

        const styleText = {
            color: "pink",
            padding: "15px",
            backgroundColor: "black"
        }

        return (
            <div>
                <Child></Child>
                <b className='txt'>hello bạn</b>
                <p className={style.txtStyle}>hello bạn 2</p>
                <p style={styleText}>hello bạn 3</p>
                <p style={{
                    color: "pink",
                    padding: "15px",
                    backgroundColor: "black"
                }}>hello bạn 3</p>

            </div>
        );
    }
}

export default Styling;