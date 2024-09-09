import { SafeAreaView } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function View({ children }: Props) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
