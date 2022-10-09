import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  Input,
  Form,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './styles.styled';
import { PropTypes } from 'prop-types';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInput = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search === '') {
      toast.error('input a word');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <Input
            type="text"
            // autoComplete="off"
            autoFocus
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
