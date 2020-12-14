import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const listCatName = ["Trong", "Trong 2"];

export default function TabOneScreen() {
  const [textValue, setTextValue] = useState("");
  const [listCatNames, setListCatNames] = useState(listCatName);
  const isOnchangeText = (text: string) => {
    setTextValue(text);
  };
  const addCatToList = () => {
    if (textValue) {
      setListCatNames((currentValue) => [...currentValue, textValue]);
      setTextValue("");
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={listCatNames}
        renderItem={({ item }) => <Text key={item}>{item}</Text>}
      />
      <Text style={styles.title}></Text>
      <View style={{ padding: 10, backgroundColor: "Yellow" }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Input your Cat name"
          onChangeText={(text) => isOnchangeText(text)}
          value={textValue}
        />
      </View>
      <Text>{textValue}</Text>
      <View>
        <Button title="Add to list Cats!" onPress={addCatToList} />
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
