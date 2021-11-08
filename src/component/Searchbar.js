import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };
  onInputchange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormsubmit = (e) => {
    e.preventDefault();
    this.props.onFormresult(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormsubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputchange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default Searchbar;
