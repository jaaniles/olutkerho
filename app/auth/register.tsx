import { Link } from "expo-router";
import { Text } from "react-native";

import View from "~/ui/view/View";

export default function RegisterScreen() {
  return (
    <View>
      <Text>Register Screen</Text>

      <Link href="/auth/login">Login</Link>
    </View>
  );
}
