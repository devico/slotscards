export function signUp(email, password) {
  return (
    fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        '"email': email,
        'password': password
      }
    }).then(response => response.json())
  );
}

export function signIn(email, password) {
  return (
    fetch('http://localhost:3000/api/v1/sessions', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        '"email': email,
        'password': password
      }
    }).then(response => response.json())
  );
}
