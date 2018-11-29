import React, { Component } from 'react'

class SearchBar extends Component {
  state = { keyword: '' }

  componentDidUpdate() {
    //console.log(this.state);
  }

  findtalk(input) {
    this.setState({ Keyword: input }, () => {

      if (input.indexOf("FUCK") != -1) {
        this.setState({keyword: "nono" })
      }
      else 
      {
        this.setState({keyword: input})
      }
    })
  }

  onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onUserSubmit(this.state.keyword);
  }

  render = () => {
    return (
      <div className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="keyword">Search!</label>
          <input
            id="keyword"
            type="text"
            onChange={e => this.findtalk(e.target.value)}
            value={this.state.keyword}
          />
        </form>
      </div>
    )
  }
}
export default SearchBar;