import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { StyledSearchBar } from './SearchBar.styled';

export const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  const handleKeyWordChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('‼️ Enter a key-word');
      return;
    }

    const onSuccess = onFormSubmit(query);
    if (onSuccess) {
      setQuery('');
    }
  };

  return (
    <StyledSearchBar onSubmit={handleFormSubmit}>
      <input
        className="Input"
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleKeyWordChange}
        value={query}
      />
      <button type="submit" className="SearchBtn">
        <ImSearch />
      </button>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
