import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  BlobProvider,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#ccc",
    width: "100%",
    height: "80%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sectionWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  leftSection: {
    width: "50%",
  },
  rightSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    width: 125,
    padding: "10px 20px",
    backgroundColor: "#FF5C00",
    color: "#fff",
    borderRadius: 9999,
    textAlign: "center",
    cursor: "pointer",
  },
});

interface Props {
  handleFunc?: () => void;
}

const PreviewVersionDownload = ({ handleFunc }: Props) => {
  const { userInfo } = useSelector((state: RootState) => state.user);

  const resumeDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.contentWrapper}>
            <View style={styles.sectionWrapper}>
              <View style={styles.leftSection}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {userInfo.fullName}
                </Text>
                <Text style={{ fontSize: 12 }}>{userInfo.role}</Text>
                <View style={{ marginTop: 16 }}>
                  <Text style={{ fontWeight: "bold" }}>Summary</Text>
                  <Text>{userInfo.responsibilities}</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingBottom: 5,
                  }}
                >
                  Personal Information
                </Text>
                <Text>{userInfo.email}</Text>
                <Text>{userInfo.phone}</Text>
              </View>
            </View>
            <View style={styles.sectionWrapper}>
              <View style={styles.leftSection}>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Education
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {userInfo.degree}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{userInfo.institution}</Text>
                  {/* <Text style={{ fontSize: 10 }}>{userInfo.year}</Text> */}
                </View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    WORK EXPERIENCE
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {userInfo.role}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{userInfo.company}</Text>
                  <Text style={{ fontSize: 10 }}>{userInfo.duration}</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Skills</Text>
                <View>
                  {userInfo?.skills?.map(({ label, value }) => (
                    <Text key={label}>{label}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonWrapper}></View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div
      onClick={handleFunc}
      className="w-full flex justify-center mt-10 absolute h-full z-40"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <>{resumeDocument}</>
      </PDFViewer>
    </div>
  );
};

export default PreviewVersionDownload;
