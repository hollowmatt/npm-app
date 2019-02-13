import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component {
	constructor(props) {
  	super(props);
  	this.onChangePersonName = this.onChangePersonName.bind(this);
  	this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
  	this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
  	this.handleClick = this.handleClick.bind(this);


  	this.state = {
  		person_name: '',
  		business_name: '',
  		business_gst_number: ''
  	}
  }

  componentDidMount() {
    axios.get('http://localhost:4000/businessRoute/edit/'+this.props.match.params.id)
      .then(response => {
          this.setState({ 
            person_name: response.data.person_name, 
            business_name: response.data.business_name,
            business_gst_number: response.data.business_gst_number });
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  onChangePersonName(e) {
  	this.setState({ person_name: e.target.value });
  }

  onChangeBusinessName(e) {
  	this.setState({ business_name: e.target.value });
  }

  onChangeGstNumber(e) {
  	this.setState({ business_gst_number: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const obj = {
    	person_name: this.state.person_name,
    	business_name: this.state.business_name,
    	business_gst_number: this.state.business_gst_number
    };
    
    axios.post('http://localhost:4000/businessRoute/update/'+this.props.match.params.id, obj).then(res => console.log(res.data));
    this.props.history.push('/index');
  }
	
	render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Update Business</h3>
        <form>
          <div className="form-group">
            <label>Add Person Name:  </label>
            <input 
            		type="text" 
            		className="form-control"
            		value={this.state.person_name}
            		onChange={this.onChangePersonName}/>
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input 
            		type="text" 
            		className="form-control"
            		value={this.state.business_name}
            		onChange={this.onChangeBusinessName}/>
          </div>
          <div className="form-group">
              <label>Add GST Number: </label>
              <input 
            		type="text" 
            		className="form-control"
            		value={this.state.business_gst_number}
            		onChange={this.onChangeGstNumber}/>
          </div>
          <div className="form-group">
            <button onClick={this.handleClick} className="btn btn-primary">Update Biz</button>
          </div>
        </form>
      </div>
    )
  }
}