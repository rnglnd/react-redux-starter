import axios from 'axios';

const getText = () => axios
  .get('api/text');

export {
  getText,
};

// For testing.
export default {
  getText,
};
