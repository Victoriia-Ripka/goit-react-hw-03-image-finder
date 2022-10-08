import { SomeComp } from './styles.styled';
import { PropTypes } from 'prop-types';

export const Modal = ({ image, onClose }) => {
  <SomeComp>
    <img src={image.largeImageURL} alt={image.tags} />
  </SomeComp>;
};

Modal.propTypes = {
    image: PropTypes.object.isRequired, 
    onClose: PropTypes.func,
  }