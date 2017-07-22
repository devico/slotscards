import { connect } from 'react-redux';
import { getCards } from '../actions/cards';
import CardsList from '../components/CardsList';

const mapStateToProps = (state) => {
  return {
    cardsList: state.cards.cardsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => {
      dispatch(getCards()).then((response) => {
        response.payload.data;
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
