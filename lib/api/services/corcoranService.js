import { baseApi } from '@lib/api/baseApi';
import { REGION_ENDPOINT } from '@lib/utils/appConstants';

class CorcoranService {
  static getAllRegions = () => baseApi.get(`${REGION_ENDPOINT}/all-regions`);
  static fetchTeamManagement = () =>
    baseApi.get('/api/about-us/management-team');
}

export default CorcoranService;
