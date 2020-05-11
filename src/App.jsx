import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filteredItems: [],
      filter: "",
      searchFilter: "",
      noFilterSelected: false,
      loading: true,
    };
  }

  async getData() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  componentDidMount() {
    this.getData().then((resp) => {
      this.setState({
        contacts: resp,
        filter: "",
        loading: false,
      });
    });
  }

  componentDidUpdate() {
    if (this.state.noFilterSelected === true) {
      this.setState({
        contacts: this.state.contacts.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        }),
        loading: false,
        filter: "",
        noFilterSelected: false,
      });
    }
  }

  render() {
    const sortData = (filterName) => {
      let contacts = [];
      contacts = this.state.contacts;

      this.setState({
        contacts: contacts.sort((a, b) => {
          if (a[filterName] < b[filterName]) return -1;
          if (a[filterName] > b[filterName]) return 1;
          return 0;
        }),
      });
    };

    const handleClick = (filterName) => {
      if (filterName === this.state.filter) {
        const button = document.getElementById("button");
        button.classList.remove("is-selected");
        this.setState({
          filter: "",
          noFilterSelected: true,
        });
      }

      this.setState({
        filter: filterName,
      });

      sortData(filterName);
    };

    const onInputChange = (searchFilter) => {
      this.setState({
        searchFilter: searchFilter,
      });
    };

    return (
      <div className="app" data-testid="app">
        <Topbar />

        <Filters
          onInputChange={onInputChange}
          filter={this.state.filter}
          searchFilter={this.state.searchFilter}
          handleClick={handleClick}
        />

        <Contacts
          loading={this.state.loading}
          filter={this.state.filter}
          noFilterSelected={this.state.noFilterSelected}
          searchFilter={this.state.searchFilter}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
