/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  }

  onSearchChange = ((event) => {
    const term = event.target.value;
    this.setState({ term });

    this.props.onSearch(term);
  })

  render() {
    return (
      <input
        type="text"
        className="search-input form-control"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
