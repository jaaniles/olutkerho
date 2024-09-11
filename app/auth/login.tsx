import { Link, router } from "expo-router";
import { Text } from "react-native";
import View from "~/ui/view/View";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
} from "@react-native-google-signin/google-signin";

export default function LoginScreen() {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      console.log(response);
      if (isSuccessResponse(response)) {
        router.replace("/(tabs)");
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      console.log("Error", JSON.stringify(error, null, 2));
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <Link href="/auth/register">Register</Link>
      <Link href="/auth/forgot-password">I forgot my password</Link>
    </View>
  );
}
