import React, { PureComponent } from 'react';
import css from './SearchBar.module.css';



export default class SearchBar extends PureComponent {

  state = { inputquery: '', };

  handleChange = (e) => {
    this.setState({inputquery: e.currentTarget.value})
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputquery);
    this.setState({ inputquery: '' });
  }

  render() {
    return <header className={css.Searchbar}>

      <form className={css.SearchForm} onSubmit={this.formSubmit}>
  
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}></span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
          value={this.state.inputquery}
        />

      </form>
    </header>
  }
}