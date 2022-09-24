import React, { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import storeItems from '../../data/items.json'
import { MyTooltip } from '../MyToolTip';

export function BsSearchbar() {
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
      setNames(storeItems.filter((item) => {
        // ignore cases
        // for case matching only
        // return item.toLowerCase().includes(val.toLowerCase())
        // for case matching in sequence
        return item.toLowerCase().indexOf(val.toLowerCase()) === 0
      }));
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

  // own debounce function
  const debounceFunction = (func, delay) => {
    let timer;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(self, args)
      }, delay)
    }
  }

  const debounceDropDown = useCallback(debounceFunction((nextValue) => getDropDown(nextValue), 500), [])

  return (
    <Form className="assessment-searchbar">
      <Form.Group>
        <Form.Control type="text" placeholder="Search" onChange={onInputChangeHandler} className="assessment-searchbar-form" value={searchText} maxLength="20" />
        {isLoading ? <FontAwesomeIcon icon={faSpinner} className="spinner assessment-searchbar-spinner" /> : <></>}
        <MyTooltip searchText={searchText} names={names} setSuggestionText={setSuggestionText} />
      </Form.Group>
    </Form>
  );
}
