import React, { Component } from 'react';
import Search from '../Search/Search';
import getResponseStatus from '../../helpers/responseStatus';
import logo from '../../assets/logo.png';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FILL_ME_IN: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  async handleSearch(queryString) {
    try {
      let response = await fetch(`/FILL_ME_IN/${queryString}`);
      let data = await response.json();
      this.setState({ FILL_ME_IN: data });
    } catch (error) {
      console.error(error);
    }
  }

  async handlePost(FILL_ME_IN) {
    try {
      let response = await fetch('/FILL_ME_IN', {
        method: 'post',
        body: JSON.stringify(FILL_ME_IN),
        headers: {
          'Content-type': 'application/json',
        },
      });
      await getResponseStatus(response);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
