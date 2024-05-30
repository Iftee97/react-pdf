import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

export function PDF() {
  let styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
    },
    section: {
      margin: 20,
      fontSize: "16px",
    },
    heading: {
      fontSize: "24px",
    },
  });
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Hello World</Text>
        </View>
        <View style={styles.section}>
          <Text>This is a demo</Text>
        </View>
      </Page>
    </Document>
  );
}
