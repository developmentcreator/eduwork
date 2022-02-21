import React from "react";



function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                className="form-control"
                name="search"
                placeholder="Search"
                onChange={props.handleChange}
                value={props.search}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-capitalize mt-5"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Search;