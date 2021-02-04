import React from "react";
import { ImageBackground } from "react-native";

import chatRoomData from "../data/Chats";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";
import bg from "../assets/images/bg.png";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
        style={{ backgroundColor: "transparent" }}
      />
      <InputBox />
    </>
  );
};

export default ChatRoomScreen;
