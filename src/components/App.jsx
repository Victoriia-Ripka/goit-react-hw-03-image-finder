import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
const URL = 'https://pixabay.com/api';
const KEY = '30426776-6c7fed832845ffaf36e9235b2';

// https://pixabay.com/api/?q=cat&page=1&key=${PixabayAPIKEY}&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    input: '',
    page: 1,
    images: null,
    isLoader: false,
  };

  // componentDidMount
  componentDidUpdate() {
    // this.setState({isLoader: true})
    fetch(
      `${URL}/?q=${this.state.input}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(r => r.json())
      .then(images => this.setState({ images: images.hits, page: 1}))
      // .finally(()=>this.setState({isLoader: false}))
  }

  handleSubmit = e => {
    e.preventDefault();
    const search = e.target.elements[1].value
    if (search.trim() !== '') {
      this.setState({ input: search.trim() });
      this.setState({ search: '' });
    }
  };

  render() {
    const images = this.state.images;
    return (
      <>
        <header onSubmit={this.handleSubmit}>
          <form>
            <button type="submit">
              <span>Search</span>
            </button>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        {/* {this.state.isLoader && <p>Loading...</p>} */}
        <ul>
          {images &&
            images.map(image => (
              <li key={image.id}>
                <img
                  src={image.previewURL}
                  alt={image.tags}
                  widtt={image.previewWidth}
                />
              </li>
            ))}
        </ul>
        {/* <Searchbar onSubmit={this.handleSubmit} /> */}
        {/* <ImageGallery images={images} /> */}
      </>
    );
  }
}
