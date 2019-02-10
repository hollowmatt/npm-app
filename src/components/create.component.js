import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Create extends Component {
  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Add New Business</h3>
        <form>
          <div className="form-group">
            <label>Add Person Name:  </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Add GST Number: </label>
            <div>
      				<Slider dots step={20} defaultValue={100}  dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />
    				</div>
          </div>
          <div className="form-group">
            <input type="submit" value="Register Business" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}