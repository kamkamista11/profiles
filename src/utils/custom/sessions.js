export const setSession = (key, data) => {
    let stored = JSON.parse(window.sessionStorage.getItem(key)) || [];
    stored.push(data);
    window.sessionStorage.setItem(key, JSON.stringify(stored));
  }