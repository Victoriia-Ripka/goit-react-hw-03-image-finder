import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pixabay.com/api';
// https://pixabay.com/api/?q=cat&page=1&key=${PixabayAPIKEY}&image_type=photo&orientation=horizontal&per_page=12

export const fetchImages = async (input, page) => {
  try {
    const r = await axios.get(
      `/?q=${input}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const arrayOfImages = r.data.hits
    return arrayOfImages;
  } catch (error) {
    toast.error('not more such result');
  }
};