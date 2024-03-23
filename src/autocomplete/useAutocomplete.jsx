import React, { useState } from 'react'


const useAutocomplete = (countries) => {

    const [suggestions, setSuggestions] = useState(countries)
    const [suggestionFocus, setSuggestionFocus] = useState(null)
    const [userInput, setUserInput] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleSuggestionFocus = (index) => {
        setSuggestionFocus(index)
    }

    const handleClick = (selectedSuggestion) => {
        setUserInput(selectedSuggestion)
        setShowSuggestions(false)
        setSuggestionFocus(null)
    }
    
    const handleInput = (e) => {
        setUserInput(e.target.value)
        setShowSuggestions(true)
        setSuggestions(() => countries.filter(country => country.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleKeyDown = (e) => {

        if(e.key === "Enter" && suggestionFocus !== null) {
            setShowSuggestions(false)
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
        showSuggestions,
        handleInput,
        setShowSuggestions,
        handleKeyDown,
        handleSuggestionFocus,
        handleClick,
    })
}

export default useAutocomplete