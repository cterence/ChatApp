import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = ({ user }: ContactListItemProps) => {
  const navigation = useNavigation();

  const onClick = () => {
    // navigation.navigate("ContactList", { id: ContactList.id, name: user.name });
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={1} ellipsizeMode="head" style={styles.status}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
