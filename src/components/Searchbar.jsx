import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Input } from './styles.styled';
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
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <Input
            type="text"
            // autoComplete="off"
            autoFocus
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
