import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const marks = {
	1: {
		style: {
			color: 'green'
		},
		label: <strong>1</strong>
	},
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: {
		style: {
			color: 'red'
		},
		label: <strong>7</strong>
	}
};
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
            <label>How bad was your day?: </label>
            <div>
      				Great! <Slider dots min={1} max={7} marks={marks} step={1} defaultValue={4} /> Terrible! <br/>
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