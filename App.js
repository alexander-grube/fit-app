import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <Button title="Button" onPress={() => Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1929",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#dedede",
  },
});
