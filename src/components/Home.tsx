import React from "react";
import ChatInputArea from "./chat-input-area";
import ChatDisplay from "./chat-display";

const Home = () => {
  return (
    <section className="w-full mt-5 h-[85vh] flex gap-8 ">
      <ChatInputArea />
      <ChatDisplay />
    </section>
  );
};

export default Home;
