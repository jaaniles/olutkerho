import { Link } from "expo-router";
import { Text } from "react-native";

import View from "~/ui/view/View";

export default function ForgotPasswordScreen() {
  return (
    <View>
      <Text>Forgot password Screen</Text>

      <Link href="/auth/login">Back to login</Link>
    </View>
  );
}
