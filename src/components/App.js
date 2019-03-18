import React from 'react';
import axios from 'axios';
// import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {

        // const response = await unsplash.get('/search/photos', {
        //     params:{query: term}
        // });

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{query: term},
            headers:{
                Authorization: "Client-ID ab90ecda4b4d1505343cf7d4a4c1c2e0170113165897d463d2dca45ca1a1f062"
            }
        })

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;