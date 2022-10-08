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

// const URL = 'https://pixabay.com/api';
// const KEY = '30426776-6c7fed832845ffaf36e9235b2';

// export const fetchImages = async (input, page, status) => {
// this.setState({ status: 'pending' });
// fetch( `${URL}/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//   .then(r => {
//     if (r.ok) {
//       return r.json();
//     }
//     return Promise.reject(new Error('such research does not exsist'));
//   })
//   .then(images => this.setState({ images: images.hits, status: 'resolved' }))
//   .catch(error => this.setState({ error, status: 'rejected' }));
// };
//
