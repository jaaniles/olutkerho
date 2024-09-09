import { Link } from "expo-router";
import { Text } from "react-native";
import View from "~/ui/view/View";

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>

      <Link href="/auth/register">Register</Link>
      <Link href="/auth/forgot-password">I forgot my password</Link>
    </View>
  );
}
