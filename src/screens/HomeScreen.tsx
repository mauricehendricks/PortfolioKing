import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import PortfolioWheel from '../components/PortfolioWheel'
import type { IncomeSource } from '../types/shared'; 

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 60, backgroundColor: '#ffffff' },
  title: { color:"#000000", fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { marginTop: 30 },
});

export default function HomeScreen(): React.JSX.Element {

    const mockIncome: IncomeSource[] = [
        { key: 1, /*type: 'Monthly'*/  amount: 6000, label: 'Job', color: '#34d399' },
        { key: 2, /*type: 'Monthly'*/ amount: 100, label: 'Freelance', color: '#60a5fa' },
        { key: 3, /*type: 'Monthly'*/ amount: 120, label: 'Dividends', color: '#fbbf24' },
    ];

    const handleAddIncome = (): void => {
        Alert.alert("Add income coming soon!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portfolio King</Text>
            <PortfolioWheel data={mockIncome} />
            <View style={styles.button}>
                <Button title="Add Income Source" onPress={handleAddIncome} />
            </View>
        </View>
  );
}