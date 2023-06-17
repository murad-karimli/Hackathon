import { useRef } from 'react';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ReportsPage = ({ navigation }) => {
    const reports = [
        { id: 1, type: 'Phishing', description: 'Phishing incident report description' },
        { id: 2, type: 'Malware', description: 'Malware incident report description' },
        { id: 3, type: 'Data Breach', description: 'Data breach incident report description' },
    ];
    const goReports1 = () => {
        navigation.navigate('Report1');
    };
    const goReports2 = () => {
        navigation.navigate('Report2');
    };
    const goReports3 = () => {
        navigation.navigate('Report3');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Incident Reports</Text>
            <View style={styles.reportItem}>
                <TouchableOpacity style={styles.reports} onPress={goReports1}>
                    <Text style={styles.reportType}>
                        Report Cybersecurity Incident
                    </Text>
                    <Text style={styles.reportDescription}>Cert is working on prevent cyber attacks</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reportItem}>
                <TouchableOpacity style={styles.reports} onPress={goReports2}>
                    <Text style={styles.reportType}>
                        Report stealing personal data
                    </Text>
                    <Text style={styles.reportDescription}>Report in case of personal data stealing</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reportItem}>
                <TouchableOpacity style={styles.reports} onPress={goReports3}>
                    <Text style={styles.reportType}>
                        Report Leakage of permitted data
                    </Text>
                    <Text style={styles.reportDescription}>Notify us in case of sensitive data leakage</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        padding: 20,
        width: '100%',
    },
    heading: {
        fontSize: 34,
        marginBottom: 20,
    },
    reportList: {
        flex: 1,
        marginTop: 110
    },
    reportItem: {
        marginBottom: 30,
    },
    reportType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        alignSelf: 'center',

    },
    reportDescription: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#000'
    },
    reports: {
        backgroundColor: "#bbc",
        height: 80,
        padding: 15,
        borderRadius: 20
    }
});

export default ReportsPage;
