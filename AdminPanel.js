import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

// const firebaseConfig = {
//   // Your Firebase configuration
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const AdminPanel = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     // Fetch incident reports from Firebase
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       const snapshot = await firebase.database().ref('reports').once('value');
//       const data = snapshot.val();
//       if (data) {
//         const reportList = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
//         setReports(reportList);
//       }
//     } catch (error) {
//       // Handle error
//       console.error('Failed to fetch incident reports', error);
//     }
//   };

  const renderReportItem = ({ item }) => (
    <View style={styles.reportItem}>
      {/* <Text style={styles.reportType}>{item.type}</Text>
      <Text style={styles.reportDescription}>{item.description}</Text>
      Additional report details and actions */}
      <Text style={styles.reportType}>
        reposrrs
      </Text>
      <Text style={styles.reportType}>
        reposrrs
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Panel - Incident Reports</Text>
      <FlatList
        // data={reports}
        renderItem={renderReportItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.reportList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  reportList: {
    flex: 1,
  },
  reportItem: {
    marginBottom: 10,
  },
  reportType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportDescription: {
    fontSize: 14,
  },
});

export default AdminPanel;
