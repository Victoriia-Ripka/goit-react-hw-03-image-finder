import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppSection } from './styles.styled';

export class App extends Component {
  state = {
    input: '',
  };

  // componentDidMount() {
  //   const input = localStorage.getItem('input')
  //   if (input) {
  //     this.setState({ input: input });
  //   }
  // }

  handleSubmit = e => {
    this.setState({ input: e });
    // localStorage.setItem("input", e)
  };

  render() {
    return (
      <AppSection>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery input={this.state.input} />
        <ToastContainer autoClose={3000} />
      </AppSection>
    );
  }
}
