import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Modal } from './Modal';
import { Gallery, Image } from './styles.styled';
import { toast } from 'react-toastify';
import { fetchImages } from 'api';
import { PropTypes } from 'prop-types';
import { Loader } from './Loader';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    loading: false,
    imageURL: null,
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.input !== this.props.input) {
      this.setState({ loading: true });
      fetchImages(this.props.input, this.state.page).then(response => {
        if (response.length > 0) {
          this.setState({ images: [...response], loading: false });
        } else {
          toast.failure('Wrong request');
          this.setState({ loading: false });
        }
      });
    }
  }

  openModal = imageURL => {
    this.setState({ isModalOpen: true, imageURL: imageURL });
  };
  closeModal = () => this.setState({ isModalOpen: false, modalUrl: null });

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ loading: true });
    fetchImages(this.props.input, this.state.page + 1).then(response => {
      this.setState({
        images: [...this.state.images, ...response],
        loading: false,
      });
      console.log(this.state.images);
    });
  };

  render() {
    const { images, loading, isModalOpen, image } = this.state;

    return (
      <>
        {loading && <Loader />}
        <Gallery>
          {images.map(image => (
            <Image key={image.id}>
              <ImageGalleryItem image={image} onClick={this.openModal} />
            </Image>
          ))}
        </Gallery>
        {isModalOpen && <Modal image={image} onClose={this.closeModal} />}
        <div style={{ display: 'grid' }}>
          {images.length > 0 && <Button loadMore={this.loadMore} />}
        </div>
      </>
    );
  }
}

ImageGallery.propTypes = {
  input: PropTypes.string.isRequired,
};
