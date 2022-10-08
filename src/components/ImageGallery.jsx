import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Gallery, Image } from './styles.styled';
import { toast } from 'react-toastify';
import { fetchImages } from 'api';
import { PropTypes } from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.input !== this.props.input && prevProps.input !== '') {
      this.setState({ status: 'pending' });
      fetchImages(this.props.input, this.state.page).then(response => {
        if (response.length > 0) {
          this.setState({ images: [...response], status: 'resolved' });
        } else {
          toast.failure('Wrong request');
          this.setState({ status: 'error' });
        }
      });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ status: 'pending' });
    fetchImages(this.props.input, this.state.page + 1).then(response => {
      this.setState({
        images: [...this.state.images, ...response],
        status: 'resolved',
      });
      console.log(this.state.images);
    });
  };

  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return <p>Loading</p>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {images.map(image => (
              <Image key={image.id}>
                <ImageGalleryItem image={image} />
              </Image>
            ))}
          </Gallery>
          <div style={{ display: 'grid' }}>
            {images.length > 0 && <Button loadMore={this.loadMore} />}
          </div>
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  input: PropTypes.string.isRequired,
};
