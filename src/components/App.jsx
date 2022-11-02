import React, { PureComponent } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


export default class App extends PureComponent {
  state = {
    query: '',
  };

  saveSearchQuerry = (query) => {
    this.setState({query})
  }


  render() {
    return (
    <div>
        <SearchBar onSubmit={this.saveSearchQuerry}></SearchBar>
        
        <ImageGallery searchQuery={this.state.query} />
    </div>
  );
  }
}
