export function getCards() {
  return (
    fetch('http://localhost:3000/api/v1/cards').then(response => response.json())
  );
}

export function getCard(id) {
  return (
    fetch(`http://localhost:3000/api/v1/cards/${id}`).then(response => response.json())
  );
}
