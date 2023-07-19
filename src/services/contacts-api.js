import axios from 'axios';

axios.defaults.baseURL = 'https://64b677fddf0839c97e159e99.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

console.log(fetchContacts());
