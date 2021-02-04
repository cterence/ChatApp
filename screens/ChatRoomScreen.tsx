import React from "react";
import { ImageBackground } from "react-native";

import chatRoomData from "../data/Chats";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <FlatList
      data={chatRoomData.messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
      inverted
    ></FlatList>
  );
};

export default ChatRoomScreen;
