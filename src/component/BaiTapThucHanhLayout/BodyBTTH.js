import React, { Component } from 'react';
import BannerBTTH from './BannerBTTH';
import ItemBTTH from './ItemBTTH';

class BodyBTTH extends Component {
    render() {
        return (
            <div className='container'>
                <BannerBTTH></BannerBTTH>

                <div className="row">
                    <div className="col-3">
                        <ItemBTTH></ItemBTTH>
                    </div>
                    <div className="col-3">
                        <ItemBTTH></ItemBTTH>
                    </div>
                    <div className="col-3">
                        <ItemBTTH></ItemBTTH>
                    </div>
                    <div className="col-3">
                        <ItemBTTH></ItemBTTH>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyBTTH;