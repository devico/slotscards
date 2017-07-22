import { connect } from 'react-redux';
import { getCard } from '../actions/cards';
import CardsItem from '../components/CardsItem';


function mapStateToProps(globalState, ownProps) {
  return {
    activeCard: globalState.posts.activeCard,
    cardId: ownProps.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCard: (id) => {
      dispatch(getCard(id)).then((result) => {
        result.response.payload.data;
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsItem);
