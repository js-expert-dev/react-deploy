import React, { Component } from 'react';

const token = localStorage.getItem('token');

export default class PendingBills extends Component {

    state={
        items: [],
        isLoaded: false,
        search: "",
    }

    componentDidMount() {
        const apiUrl = "http://localhost:3000/bill";
    
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
                if(!result.error){
                    this.setState({
                        items: result.data,
                        isLoaded: true,
                      });
                }
                else{
                    alert('Error is found');
                }
            },
            (error) => {
              this.setState({ error: error });
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
              item.amount.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
          });
        }
        else{
          return []
        }
      }

    render() {

        let items ;
    
        if(!this.state.isLoaded){
           return(
            <div>
                data is loading.....
            </div>
           )
        }
        else{
            items = this.filterItems();
            return (
                <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search bill by amount here"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
              </div>
              <h1 style={{ textAlign: "center" }}>Bills</h1>
                    <table className="table table-strip">
                <thead>
                  <tr>
                    <th>Status </th>
                    <th>Payment Type </th>
                    <th>CheckIn Code </th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                    <td>{item.status}</td>
                      <td>{item.paymentType}</td>
                      <td>{item.checkIn}</td>
                      <td>{item.amount} </td>
                      <td>
                        <button
                          className="btn btn-outline-info"
                          onClick={console.log('Bill is paid')}
                        >
                          Paid
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </div>
                </div>
            )
        }
        
    }
}
