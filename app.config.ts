import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'olutkerho',
  name: 'Olutkerho',
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON
  },
  ios: {
    googleServicesFile: process.env.GOOGLE_SERVICE_INFO
  }
});