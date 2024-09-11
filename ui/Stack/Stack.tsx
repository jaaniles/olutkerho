import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import { spacing } from '~/theme';

type Props = {
  children: ReactNode;
  spacing?: Spacing;
  align?: Align;
};

type Spacing =
  | 'none'
  | 'small'
  | 'smallMedium'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'
  | 'xxLarge'

type Align = 'initial' | 'start' | 'center' | 'end';

export function Stack({
  children,
  spacing = 'none',
  align = 'initial',
}: Props) {
  return (
    <View style={[spacingStyles[spacing], alignStyles[align]]}>{children}</View>
  );
}

const spacingStyles = StyleSheet.create({
  none: {
    gap: spacing._0,
  },
  small: {
    gap: spacing._8,
  },
  smallMedium: {
    gap: spacing._16,
  },
  medium: {
    gap: spacing._24,
  },
  mediumLarge: {
    gap: spacing._32,
  },
  large: {
    gap: spacing._48,
  },
  extraLarge: {
    gap: spacing._72,
  },
  xxLarge: {
    gap: spacing._98,
  },
});

const alignStyles = StyleSheet.create({
  initial: {},
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
});