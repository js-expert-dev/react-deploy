import React, { Component } from 'react';

export default class AddTable extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
          tableNo: '',
          size: '',
          hallNo: '',
          checkInCode: ''

        };
    
        this.state = this.initialState;
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value,
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
      }
    
      render() {
        return (
          <div className="row">
          <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
            <h2>Add Table</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Number">Table No. : </label>
                <input
                  required
                  className="form-control"
                  type="number"
                  name="tableNo"
                  value={this.state.tableNo}
                  onChange={this.handleChange}
                  placeholder="Table No."
                />
              </div>
              <div className="form-group">
                <label htmlFor="Size">Size : </label>
                <input
                  required
                  className="form-control"
                  type="number"
                  name="size"
                  value={this.state.size}
                  onChange={this.handleChange}
                  placeholder="No. of Chairs"
                />
              </div>

              <div className="form-group">
                <label htmlFor='checkInCode'>CheckIn Code : </label>
                <input
                  required
                  className="form-control"
                  type="number"
                  name="checkInCode"
                  value={this.state.checkInCode}
                  onChange={this.handleChange}
                  placeholder="Check In Code"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hallNo">Hall No. : </label>
                <input
                  required
                  className="form-control"
                  type="number"
                  name="hallNo"
                  value={this.state.hallNo}
                  onChange={this.handleChange}
                  placeholder="Hall number here"
                />
              </div>
              
    
              <button className="btn btn-outline-success" type="submit">
              <i class="fa fa-check">&nbsp; </i>Save
              </button>
            </form>
          </div>
          </div>
        );
      }
}
