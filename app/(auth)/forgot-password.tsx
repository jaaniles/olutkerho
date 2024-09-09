
import { Link } from 'expo-router';

import View from '~/app/ui/view/View';
import { ThemedText } from '~/components/ThemedText';

export default function ForgotPasswordScreen() {
  return (
    <View>
      <ThemedText>Forgot password Screen</ThemedText>

      <Link href="/">Back to login</Link>
    </View>
  );
}