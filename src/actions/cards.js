import axios from 'axios';

export const GET_CARDS = 'GET_CARDS';
export const GET_CARD = 'GET_CARD';

export function getCards() {
  const cards = axios({
    method: 'get',
    url: 'http://localhost:3000/api/v1/cards',
    headers: []
  });

  return {
    type: GET_CARDS,
    payload: cards
  };
}

export function getCard(id) {
  const card = axios.get(`'http://localhost:3000/api/v1/cards/${id}`);

  return {
    type: GET_CARD,
    payload: card
  };
}
