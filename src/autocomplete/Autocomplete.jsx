import React, { useRef, useState } from 'react'
import styles from './autocomplete.module.css'
import useAutocomplete from './useAutocomplete'
import { countries } from './countries'

const Autocomplete = () => {

  const { showSuggestions, suggestions, setShowSuggestions, userInput, suggestionFocus, handleKeyDown, handleSuggestionFocus, handleClick, handleInput } = useAutocomplete(countries)

  return (
    <div className={styles.main}>
      <p>Use up and down arrow to navigate suggestions</p>
      <div className={styles.autocomplete}>
        <input
          value={userInput}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          aria-label='Search'
          placeholder='Search Country'
          type='search'
        />

        {showSuggestions &&
          <ul className={styles.suggestions}>
            {
              suggestions.length > 0 ? suggestions?.map((suggestion, ind) => (
                <li
                  key={ind}
                  className={userInput === suggestion ? styles.selected : suggestionFocus === ind ? styles.highlight : ""}
                  onMouseOver={() => handleSuggestionFocus(ind)}
                  onMouseLeave={() => handleSuggestionFocus(null)}
                  onClick={() => handleClick(suggestion)}
                >
                  {suggestion}
                </li>)
              )
                :
                <p>No Options</p>
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default Autocomplete