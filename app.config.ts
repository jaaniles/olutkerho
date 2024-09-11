import type { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "olutkerho",
  name: "Olutkerho",
  scheme: "org.olutkerho.app",
  android: {
    package: "org.olutkerho.app",
    googleServicesFile: "./google-services.json",
  },
  ios: {
    bundleIdentifier: "org.olutkerho.app",
    googleServicesFile: "./GoogleService-Info.plist",
  },
});
