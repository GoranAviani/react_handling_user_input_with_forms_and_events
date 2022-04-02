import React from 'react';


class SearchBar extends React.Component {
    state = {term: ''}

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.term)
    }

    userInput = (e) => {
        this.setState({term: e.target.value})
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                           value={this.state.term}
                           onChange={this.userInput}/>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;