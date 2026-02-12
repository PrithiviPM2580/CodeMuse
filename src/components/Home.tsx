import ChatInputArea from "./chat-input-area";
import ChatDisplay from "./chat-display";

const Home = () => {
  return (
    <section className="w-full h-full lg:h-[85vh] mt-5 flex pb-10 flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 px-6 lg:p-0 ">
      <ChatInputArea />
      <ChatDisplay />
    </section>
  );
};

export default Home;
