import React, { useState } from 'react'


const useAutocomplete = (countries) => {

    const [suggestions, setSuggestions] = useState(countries)
    const [suggestionFocus, setSuggestionFocus] = useState(null)
    const [userInput, setUserInput] = useState("")

    const handleSuggestionFocus = (index) => {
        setSuggestionFocus(index)
    }

    const handleClick = (selectedSuggestion) => {
        setUserInput(selectedSuggestion)
        setSuggestions([])
        setSuggestionFocus(null)
    }
    
    const handleInput = (e) => {
        setUserInput(e.target.value)
        setSuggestions(() => suggestions.filter(s => s.includes(e.target.value)))
    }

    const handleKeyDown = (e) => {

        if(e.key === "Enter" && suggestionFocus !== null) {
            setSuggestions([])
            setSuggestionFocus(null) 
            setUserInput(suggestions[suggestionFocus])
        }

        if (e.key === "ArrowDown") {
            e.preventDefault()
            setSuggestionFocus((prevFocus) => {
                if (prevFocus === null || prevFocus === suggestions.length - 1) {
                    return 0;
                } else {
                    return prevFocus + 1;
                }
            });
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setSuggestionFocus((prevFocus) => {
                if (prevFocus === null || prevFocus === 0) {
                    return suggestions.length - 1;
                } else {
                    return prevFocus - 1;
                }
            });
        }
    }

    return ({
        suggestions,
        suggestionFocus,
        userInput,
        handleInput,
        handleKeyDown,
        handleSuggestionFocus,
        handleClick,
    })
}

export default useAutocomplete