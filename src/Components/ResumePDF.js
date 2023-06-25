import React from 'react';
import { Page, Document, Font, StyleSheet, View, Text } from '@react-pdf/renderer';

// Register the font
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.ttf',
});

// Define the styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: '40px',
  },
  heading: {
    fontSize: '24pt',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '16pt',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  content: {
    fontSize: '12pt',
  },
});

const ResumePDF = ({ values }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.heading}>{values.basicinfo?.name || 'John Doe'}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {values.experience?.map((exp, index) => (
              <View key={index} style={styles.content}>
                <Text>Company: {exp.company}</Text>
                <Text>Position: {exp.position}</Text>
                <Text>Duration: {exp.duration}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {values.education?.map((edu, index) => (
              <View key={index} style={styles.content}>
                <Text>Institution: {edu.institution}</Text>
                <Text>Degree: {edu.degree}</Text>
                <Text>Year: {edu.year}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {values.skills?.map((skill, index) => (
              <Text key={index} style={styles.content}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
