// gets all messages
export const getSavedMessages = (token) => {
  return fetch('/api/messages', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

// exports message(s) to be saved
export const saveMessages = (messagesData) => {
  return fetch('/api/saveMessages', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messagesData),
  });
};