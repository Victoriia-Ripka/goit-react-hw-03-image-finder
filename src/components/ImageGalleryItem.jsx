import { Component } from 'react';
import { Modal } from './Modal';
import { Img } from './styles.styled';
import { PropTypes } from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { image } = this.props;
    return (
      <>
        <Img
          src={image.webformatURL}
          alt={image.tags}
          width={image.previewWidth}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && <Modal image={image} onClose={this.closeModal}/>}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired, //????
};

