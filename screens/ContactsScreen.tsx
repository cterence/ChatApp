import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import ContactListItem from "../components/ContactListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/NewMessageButton";
import { Text, View } from "../components/Themed";

import users from "../data/Users";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
