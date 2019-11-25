import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_LOADING,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_FAILED,
    SEARCH_MOVIES_SUCCESS,
    FETCH_MOVIES_DETAIL_REQUEST,
    FETCH_MOVIES_DETAIL_SUCCESS,
    FETCH_MOVIES_DETAIL_FAILED,
} from "../actionTypes";

const initialState = {
  allMovies: null,
  error: null,
  loading: null,
  selectedMovie: {
      data: null,
      error: null,
      loading: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case FETCH_MOVIES_LOADING: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...initialState,
        allMovies: action.payload,
      };
    }
    case FETCH_MOVIES_FAILED: {
      return {
        ...initialState,
        error: action.error,
      };
    }
    case SEARCH_MOVIES_SUCCESS: {
        return {
            ...initialState,
            allMovies: action.payload.Search
        }
    }
    case FETCH_MOVIES_DETAIL_REQUEST: {
        return {
            ...initialState,
            selectedMovie: {
                ...initialState.selectedMovie,
                loading: true,
            }
        }
    }
    case FETCH_MOVIES_DETAIL_SUCCESS: {
        return {
            ...initialState,
            selectedMovie: {
                ...initialState.selectedMovie,
                data: action.payload,
            }
        }
    }
    case FETCH_MOVIES_DETAIL_FAILED: {
      return {
        ...initialState,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
