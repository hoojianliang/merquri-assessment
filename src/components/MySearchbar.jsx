import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { MyTooltip } from './MyToolTip';
import { getNamesList, debounceFunction } from "../utilities/common";

export function MySearchbar() {
  const [names, setNames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  // set names list to empty array
  const setEmptyNames = () => {
    setNames([]);
  }

  // callback from Tooltip
  const setSuggestionText = (suggestion) => {
    setEmptyNames()
    setSearchText(suggestion)
  }

  const getDropDown = (val) => {
    // empty value won't display suggestion name
    if (val) {
      setNames(getNamesList(val));
    } else {
      setEmptyNames()
    }
    setLoading(false);
  }

  const onInputChangeHandler = (e) => {
    const nextValue = e.target.value
    setSearchText(nextValue);
    debounceDropDown(nextValue);
    // if search bar has value show spinner
    if (nextValue) {
      setLoading(true);
    } else {
      setEmptyNames()
      setLoading(false);
    }
  }

  const debounceDropDown = useMemo(() => debounceFunction((nextValue) => getDropDown(nextValue), 500), [])

  return (
    <form className="assessment-searchbar">
      <div>
        <input type="text" placeholder="Search" onChange={onInputChangeHandler} className="assessment-searchbar-form my-searchbar-form" value={searchText} maxLength="20" />
        {isLoading ? <FontAwesomeIcon icon={faSpinner} className="spinner assessment-searchbar-spinner" /> : <></>}
        <MyTooltip searchText={searchText} names={names} setSuggestionText={setSuggestionText} />
      </div>
    </form>
  );
}
