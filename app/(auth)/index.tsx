
import { Link } from 'expo-router';
import View from '~/app/ui/view/View';
import { ThemedText } from '~/components/ThemedText';

export default function LoginScreen() {
  return (
    <View>
      <ThemedText>Login Screen</ThemedText>

      <Link href="/register">Register</Link>
      <Link href="/forgot-password">I forgot my password</Link>
    </View>
  );
}