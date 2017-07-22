import { GET_CARDS, GET_CARD } from '../actions/cards';

const INITIAL_STATE = { cardsList: { cards: [], error: null, loading: false } };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CARDS:
    	return { ...state, cardsList: { cards: [] } };
    case GET_CARD:
      return { ...state, activeCard: { ...state.activeCard, loading: true } };
    default:
      return state;
  }
}
