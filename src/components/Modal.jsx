import { Backdrop, ImgModal } from './styles.styled';
import { PropTypes } from 'prop-types';
import { Component } from 'react';

export class Modal extends Component  {

closeModal = e => {
this.props.onClose()
}

render() {
  console.log('hello')
  return (
    <Backdrop onClick={this.closeModal}>
      <ImgModal src={this.props.imageURL} alt='hello' />
    </Backdrop>
  );
}

};

Modal.propTypes = {
  imageURL: PropTypes.string,
  onClose: PropTypes.func,
};
