
const setSelectedFilters = (selectedFilters) => {
  return {
    type: 'SET_SELECTED_FILTERS',
    payload: selectedFilters,
  };
};

const filteredItemsLoaded = (filteredItems) => {
  return {
    type: 'FILTERED_ITEMS_LOADED',
    payload: filteredItems,
  };
};

const setSortType = (sortType) => {
  return {
    type : 'SET_SORT_TYPE',
    payload: sortType,
  };
}

const fetchFilteredItems = (category,selectedFilters,sortType) => (dispatch) => {

  fetch(`http://localhost:3000/${category}?${selectedFilters.join('')}${sortType}`)
    .then(resolve => resolve.json())
    .then(data => dispatch(filteredItemsLoaded(data)));

}

export {setSelectedFilters, filteredItemsLoaded ,fetchFilteredItems ,setSortType};
