export const getSavedMessages = () => {
  const savedMessagesId = localStorage.getItem('saved_messages')
    ? JSON.parse(localStorage.getItem('saved_messages'))
    : [];

  return savedMessagesId;
};

export const saveMessages = (messagesIdArr) => {
  if (messagesIdArr.length) {
    localStorage.setItem('saved_messages', JSON.stringify(messagesIdArr));
  } else {
    localStorage.removeItem('saved_messages');
  }
};