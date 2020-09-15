import React, { Component } from "react";

import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import "../styles/styles.css";


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChangeSearchInput(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const searchValue = this.state.searchText;
    this.props.onSearch(searchValue);
    this.setState({
      searchText: "",
    })
  }

  render() {
    return (
      <div>
      <AppBar 
        children="Weather App"
        className="search-app-header"
        position="static"
      />
      <div className="header-form">
        <form
          name="city-form"
          className="city-form"
          onSubmit={this.onSubmit}
        >
          <Input
            type="text"
            name="city-search-input"
            className="city-search-input"
            value={this.state.searchText}
            onChange={this.handleChangeSearchInput}
            placeholder="Choose your location"
          />
          <Button 
            className="city-search-btn" 
            name="city-search-btn" 
            variant="contained"
            color="primary"
            type="submit"
          >
            <SearchIcon />
          </Button>
        </form>
      </div>
      {
        this.props.err && ( 
        <p className="error-text">
          Please, try again. Maybe you printed incorrect city name.
        </p>
      )}
      {
        this.props.isResultFetched && !this.props.err && (
        <p className="warning-text"> 
          Check the list. You've already added this city. 
        </p>
      )}
      </div>
    );
  }
}

export default SearchForm;