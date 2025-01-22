const users = [
    { username: 'sonu', password: 'sonu123' },
    { username: 'prince', password: 'prince123' },
  ];
  
  let currentUser = null;

  export function login(username, password) {
    let use = users.find((u)=> u.username === username && u.password === password);
    if (use) {
      currentUser = use;
      return `Login successful! Welcome, ${username}.`;;
    } else {
      return 'Invalid username or password.';;
    }
  }

  export function logout() {
    if (currentUser) {
        const username = currentUser.username;
        currentUser = null;
        return `Logout successful! Goodbye, ${username}.`;
      } else {
        return 'No user is currently logged in.';
      }
  }