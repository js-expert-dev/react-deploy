import React from 'react';
// import { getToken } from "../utils/common";
import { toast } from 'react-toastify';

const token = localStorage.getItem('token');

export default class ItemGetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      response: {},
      search: '',
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3000/item';

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
    };

    return fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        (error) => {
          console.log('Error : ' + error);
        }
      );
  }

  deleteItem(itemId) {
    const { items } = this.state;

    const apiUrl = 'http://localhost:3000/item/' + itemId;
    const formData = new FormData();
    formData.append('itemId', itemId);

    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
    };
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          toast.success('Item is deleted successfully.');
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

  filterItems = () => {
    if (this.state.items?.length > 0) {
      return this.state?.items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      });
    } else {
      return [];
    }
  };

  render() {
    let items;
    let isLoaded = this.state.isLoaded;

    if (!isLoaded) {
      return <div>loading....</div>;
    } else {
      items = this.filterItems();
      return (
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
            <br />
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search Item here"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>

            <h1 style={{ textAlign: 'center' }}>Items</h1>

            <table className="table table-strip">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={'http://localhost:3000/' + item.image}
                        alt="item Pic"
                        width="100px"
                        height="100px"
                      />{' '}
                      {console.log(item.image)}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category.name} </td>
                    <td>{item.description} </td>
                    <td>
                      <button
                        className="btn btn-outline-info btn-small"
                        style={{ margin: 2 + 'px' }}
                        onClick={() => this.props.editItem(item._id)}
                      >
                        Edit
                      </button>
                      {/* &nbsp;&nbsp; */}
                      <button
                        className="btn btn-outline-danger btn-small"
                        onClick={() => this.deleteItem(item._id)}
                      >
                        Delete
                      </button>
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
