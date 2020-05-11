import React from "react";

class Filters extends React.Component {
  render() {
    const filters = [
      "name",
      "country",
      "company",
      "department",
      "admissionDate",
    ];

    const isChecked = (selectedFilter) => selectedFilter === this.props.filter;

    return (
      <div data-testid="filters" className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.props.searchFilter}
              onChange={(e) => this.props.onInputChange(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          {filters.map((filter) => (
            <button
              id={isChecked(filter) ? "button" : null}
              onClick={() => this.props.handleClick(filter)}
              key={filter}
              className={
                isChecked(filter)
                  ? "filters__item is-selected"
                  : "filters__item"
              }
            >
              {filter} <i className="fas fa-sort-down" />
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Filters;
