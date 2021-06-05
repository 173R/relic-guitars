
const initialState = {
  items: [],
  loading: true,
  category: null,
  categories: {
    guitars: "гитары",
    bass : "бас-гитары",
    pedals: "эффекты",
    amps: "усиление",
    accessories: "аксессуары",
  },
  filteredItems: [],
  selectedFilters: [],
  sortType: [0],
  typesOfSorting: ['&_sort=price&_order=desc','&_sort=price&_order=asc','&_sort=title&_order=asc']
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS_REQUESTED":
      return {
        ...state,
        items: [],
        loading: true,
      };
    case "ITEMS_LOADED":
      return {
        ...state,
        filteredItems: action.payload,
        items: action.payload,
        loading: false,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedFilters: [],
        items: [],
        loading: true,
        category: action.payload,
      };
    case 'SET_SELECTED_FILTERS':
      return {
        ...state,
        loading: true,
        selectedFilters: action.payload,
      };
    case 'FILTERED_ITEMS_LOADED':
      return {
        ...state,
        loading: false,
        filteredItems: action.payload,
      };
    case 'SET_SORT_TYPE':
      return {
        ...state,
        loading: false,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;