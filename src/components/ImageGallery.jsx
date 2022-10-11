import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Modal } from './Modal';
import { Gallery, Image, ButtonWrapper } from './styles.styled';
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.input !== this.props.input) {
      this.setState({ page: 1, images: [], loading: true });
      fetchImages(this.props.input, this.state.page).then(response => {
        if (response.length > 0) {
          this.setState({ images: [...response], loading: false });
        } else {
          this.setState({ loading: false });
          toast.error('Wrong request');
        }
      });
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImages(this.props.input, this.state.page + 1).then(response => {
        this.setState({
          images: [...this.state.images, ...response],
          loading: false,
        });
      });
    }
  }

  openModal = imageURL => {
    this.setState({ isModalOpen: true, imageURL: imageURL });
  };
  closeModal = () => this.setState({ isModalOpen: false, modalUrl: null });

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, isModalOpen, imageURL } = this.state;

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
        {isModalOpen && <Modal imageURL={imageURL} onClose={this.closeModal} />}
        <ButtonWrapper>
          {images.length > 0 && <Button loadMore={this.loadMore} />}
        </ButtonWrapper>
      </>
    );
  }
}

ImageGallery.propTypes = {
  input: PropTypes.string.isRequired,
};