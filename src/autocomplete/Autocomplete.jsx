import React, { useRef, useState } from 'react'
import styles from './autocomplete.module.css'
import useAutocomplete from './useAutocomplete'
import { countries } from './countries'

const Item = ({ children }) => {
  return <div className='selected-item'>
    {children}
    <span className='close'>x</span>
  </div>
}

const Autocomplete = () => {

  const inputRef = useRef("")

  const {suggestions, userInput, suggestionFocus, handleKeyDown, handleSuggestionFocus, handleClick, handleInput} = useAutocomplete(countries)


  return (
    <div className={styles.main}>
      <p>Use up and down arrow to navigate suggestions</p>
      <div className={styles.autocomplete}>
        <input
          value={userInput}
          ref={inputRef}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          aria-label='Search'
          placeholder='Search Country'
          type='search'
        />

        <ul className={styles.suggestions}>
          {
            suggestions?.map((suggestion, ind) => (
              <li
                className={suggestionFocus === ind ? styles.highlight : ""}
                onMouseOver={() => handleSuggestionFocus(ind)}
                onMouseLeave={() => handleSuggestionFocus(null)}
                onClick={() => handleClick(suggestion)}
              >
                {suggestion}
              </li>)
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Autocomplete