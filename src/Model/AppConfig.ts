import Auth0Config from './Auth0Config';
import ApiConfig from './ApiConfig';

export default interface AppConfig {
  auth0: Auth0Config;
  api: ApiConfig;
}
