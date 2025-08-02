import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'DB_LINK_HERE_IDIOT'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2ecc71" />
        <Text>Loading plant data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Plant Monitor</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Temperature</Text>
        <Text style={styles.value}>
          {data?.temperature?.toFixed(1) || 'N/A'}°C
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>
          {data?.humidity?.toFixed(1) || 'N/A'}%
        </Text>
      </View>

      <View style={[styles.card, styles.statusCard]}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.statusText}>
          {data?.status || 'Checking...'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statusCard: {
    backgroundColor: '#f8f9fa',
    borderLeftWidth: 5,
    borderLeftColor: '#2ecc71',
  },
  statusText: {
    fontSize: 18,
    color: '#2c3e50',
    fontStyle: 'italic',
  },
});
