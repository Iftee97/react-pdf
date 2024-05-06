import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

export function PDF() {
  let styling = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
    },
    section: {
      margin: 20,
      fontSize: "16pt",
    },
  });
  return (
    <Document>
      <Page style={styling.page}>
        <View style={styling.section}>
          <Text>Hello World</Text>
        </View>
        <View style={styling.section}>
          <Text>This is a demo</Text>
        </View>
      </Page>
    </Document>
  );
}
