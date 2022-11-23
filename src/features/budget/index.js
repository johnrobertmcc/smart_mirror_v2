import axios from 'axios';
import { USER_TOKEN, API_URL } from 'constants/api';

/**
 * Function used to register a new user to the database and set token to local storage.
 *
 * @author John Robert McCann
 * @since 6/27/2022
 * @param {string} token   The user's token.
 */
export async function getBudgetItems(token = USER_TOKEN) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response?.data;
}
