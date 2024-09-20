import React, { Component } from 'react';
import HeaderBTTH from './HeaderBTTH';
import BodyBTTH from './BodyBTTH';
import FooterBTTH from './FooterBTTH';

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderBTTH></HeaderBTTH>
                <BodyBTTH></BodyBTTH>
                <FooterBTTH></FooterBTTH>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;