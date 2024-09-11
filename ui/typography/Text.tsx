import { Text, type TextProps, StyleSheet } from 'react-native';
import { fontSize } from '~/theme';


export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: fontSize.default,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: fontSize.default,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: "700",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: fontSize.subtitle,
    fontWeight: "700",
  },
  link: {
    lineHeight: 30,
    fontSize: fontSize.default,
    color: '#0a7ea4',
  },
});