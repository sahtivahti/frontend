import AppConfig from '../Model/AppConfig';

if (!('appConfig' in window)) {
  console.error('Can\'t find appConfig!');
}

const config: AppConfig = (window as any).appConfig;

export default config;