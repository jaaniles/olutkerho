import View from "~/ui/view/View";

import { Button, Text } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

export default function ProfileScreen() {
  const handleLogout = () => {
    GoogleSignin.signOut();

    router.replace("/auth/login");
  };

  return (
    <View>
      <Text>Profile xD</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
