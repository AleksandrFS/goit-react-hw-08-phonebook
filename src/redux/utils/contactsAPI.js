import axios from 'axios';

export const getContacts = async () => {
  const data = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const res = await axios.post('/contacts', contact);
  return res;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
};
