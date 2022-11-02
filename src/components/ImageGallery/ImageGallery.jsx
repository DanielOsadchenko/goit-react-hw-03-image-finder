import React, { PureComponent } from 'react';
import css from "./ImageGallery.module.css";
import { ThreeDots } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';



export default class ImageGallery extends PureComponent {
  state = {
    images: [],
    page: 1,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    

    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, loading: true });

      fetch(`https://pixabay.com/api/?q=${nextQuery}&page=${this.state.page}&key=30188307-c49a871897b6d5bfff07bff1b&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        }).then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => { this.setState({ loading: false }); this.setState(prevState => ({ page: prevState.page + 1 })) });
      
    }
  }

  handleClick = () => {
      
      this.setState({ loading: true });
    
    
    fetch(`https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=30188307-c49a871897b6d5bfff07bff1b&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        }).then(images => this.setState(prevState => ({ images: [...prevState.images, ...images.hits] })))
        .catch(error => this.setState({ error }))
      .finally(() => { this.setState({ loading: false }); this.setState(prevState => ({ page: prevState.page + 1 })) });
  }
  

  
  render() {
    const { images, loading} = this.state;

    return <div>
      <ul className={css.gallery}>
      {images.map(image => {
        return < ImageGalleryItem key = {image.id} image = {image.webformatURL} tags = {image.tags} />
      })}
      </ul>

      {images.length !== 0 && <button type='button' onClick={this.handleClick}>Load more</button>}

      {loading && <ThreeDots 
        height="300" 
        width="300" 
        radius="9"
        color="#3f51b5" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />}
      
    </div>
  }
}