import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    onInputChange(event){
        console.log('being called..');
        console.log(event.target.value)
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    };

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label> Image Search </label>
                    <input type="text"
                           className="field"
                           value={this.state.term}
                           onChange={(e) => this.setState({term: e.target.value}) }/>
                </form>
            </div>
        )
    }
}

export default SearchBar;