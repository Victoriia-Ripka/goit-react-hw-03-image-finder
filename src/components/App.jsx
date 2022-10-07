import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
const KEY = "30426776-6c7fed832845ffaf36e9235b2"
const URL = "https://pixabay.com/api"

const Searchbar = onSubmit => {
  <form onSubmit={onSubmit}>
    <input
      type="text"
      // value={this.state.search}
      name="search"
      required
      // onChange={this.handleInput}
    ></input>
    <button type="submit">search</button>
  </form>;
};

const ImageGallery = ({ images }) => {
  <ul>
    {images.map(image => (
      <li key={image.id}>
        <p>{image.id}</p>
        {/* <img src={image.previewURL} alt={image.tags} widtt={image.previewWidth}/> */}
      </li>
    ))}
  </ul>;
};

// https://pixabay.com/api/?q=cat&page=1&key=${PixabayAPIKEY}&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    input: '',
    page: 1,
    images: [],
    isLoader: false,
  };

  async componentDidMount() {
    const response = await axios.get(
      `${URL}/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }

  handleSubmit = e => {
    console.log(e.currentTarget.value);
    e.preventDefault();
    if (this.state.search.trim() !== '') {
      this.setState({ input: this.state.search.trim() });
      this.setState({ search: '' });
    }
  };

  render() {
    const images = this.state.images;
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            // value={this.state.search}
            name="search"
            required
            // onChange={this.handleInput}
          ></input>
          <button type="submit">search</button>
        </form> */}
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
      </>
    );
  }
}
