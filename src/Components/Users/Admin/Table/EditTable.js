import React, { Component } from 'react'

export default class EditTable extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            tableNo: '',
            size: '',
            hallNo: '',
            checkInCode: '',
            _id: '',
        };
        if (props.product) {
          this.state = props.product;
        } else {
          this.state = this.initialState;
        }
    
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
        let pageTitle;
        if (this.state._id) {
          pageTitle = <h2>Edit Category</h2>;
        } else {
          pageTitle = <h2>Category not Edited</h2>;
        }
        return (
          <div className="row">
          <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
            {pageTitle}
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="Number">Table # : </label>
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
                <label htmlFor="hallNo">Hall No : </label>
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
    
              <br />
              <input type="hidden" name="_id" value={this.state._id} />
    
              <button className="btn btn-outline-success btn-block" type="submit">
                Submit
              </button>
            </form>
          </div>
          </div>
        );
      }
}
