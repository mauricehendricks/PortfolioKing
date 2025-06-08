import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import type { IncomeSource, IncomeType } from '../types/shared';

type PortfolioWheelProps = {
  data: IncomeSource[];
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flex: 1
  },
});

export default function PortfolioWheel({ data }: PortfolioWheelProps): React.JSX.Element {
  const pieData = data.map(source => ({
    value: source.amount,
    color: source.color
  }));

  // TODO: Migrate this to VictoryPie
  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        donut
      />
    </View>
  );
}