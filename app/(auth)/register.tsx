
import { Link } from 'expo-router';

import View from '~/app/ui/view/View';
import { ThemedText } from '~/components/ThemedText';

export default function RegisterScreen() {
  return (
    <View>
      <ThemedText>Register Screen</ThemedText>

      <Link href="/">Login</Link>
    </View>
  );
}