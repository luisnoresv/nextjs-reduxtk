import { breakingBadApi } from '@lib/api/baseApi';
import { CHARACTERS_ENDPOINT } from '@lib/utils/appConstants';

class BreakingBadService {
  static fetchAllCharacters = () => breakingBadApi.get(CHARACTERS_ENDPOINT);

  static fetchCharacterById = (id) =>
    breakingBadApi.get(`${CHARACTERS_ENDPOINT}/${id}`);
}

export default BreakingBadService;
