import React, { useEffect, useRef, useState } from 'react'
import styles from './autocomplete.module.css'
import useAutocomplete from './useAutocomplete'
import { countries } from './countries'

const Autocomplete = () => {

  const inputRef = useRef()

  const { showSuggestions, suggestions, setShowSuggestions, userInput, suggestionFocus, handleKeyDown, handleSuggestionFocus, handleClick, handleInput } = useAutocomplete(countries)

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if(inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false)
        console.log("clicked outside")
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [inputRef.current])

  return (
    <div className={styles.main}>
      <p>Use up and down arrow to navigate suggestions</p>
      <div className={styles.autocomplete}>
        <input
          ref={inputRef}
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