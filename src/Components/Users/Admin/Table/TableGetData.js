import React, { Component } from 'react';

const token = localStorage.getItem('token');

export default class TableGetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          response: {},
          search: "",
        };
      }
    
      componentDidMount() {
        const apiUrl = "http://localhost:3000/table";
    
        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "access-token": token,
          },
        };
    
        return fetch(apiUrl, options)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.data,
                isLoaded: true,
              });
            },
            (error) => {
              this.setState({ error });
            }
          );
      }
    
      delCategory(itemId) {
        const { items } = this.state;
    
        const apiUrl = "http://localhost:3000/table/" + itemId;
        const formData = new FormData();
        formData.append("itemId", itemId);
    
        const options = {
          method: "DELETE",
          headers: {
            'access-token': token
          },
          body: formData,
        };
        fetch(apiUrl, options)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                response: result,
                items: items.filter((item) => item._id !== itemId),
              });
            },
            (error) => {
              this.setState({ error });
            }
          );
      }
    
      updateSearch(event) {
        this.setState({
          search: event.target.value.substr(0, 20),
        });
      }

      filterItems=()=>{
    if(this.state.items.length>0){
     return this.state.items.filter((item) => {
        return (
          item.tableNo.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
    }
    else{
      return []
    }
  }

      render() {

        let items ;
    
        let isLoaded = this.state.isLoaded;
    
        if (!isLoaded) {
         
          return <div>data is loading.....</div>;
        } 
        else {
          items = this.filterItems();
          return (
            <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Table No here"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
              </div>
              <h1 style={{ textAlign: "center" }}>Tables</h1>
              {this.state.response.message && <p>{this.state.response.message}</p>}
              <table className="table table-strip">
                <thead>
                  <tr>
                    <th>Table # </th>
                    <th>Size </th>
                    <th>Hall # </th>
                    <th>CheckIn Code </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.tableNo}</td>
                      <td>{item.size}</td>
                      <td>{item.hallNo} </td>
                      <td>{item.checkInCode}</td>
                      <td>
                        <button
                          className="btn btn-outline-info btn-small"
                          onClick={() => this.props.editCategory(item._id)}
                        >
                          Edit
                        </button>
                        &nbsp;&nbsp;<button className='btn btn-danger btn-small' onClick={()=> this.delCategory(item._id)} >Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          );
        }
      }
}
