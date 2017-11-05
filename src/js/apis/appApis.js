import axios from 'axios';

export const getText = () => axios
  .get('api/text');
