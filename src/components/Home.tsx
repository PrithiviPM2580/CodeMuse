import ChatInputArea from "./chat-input-area";
import ChatDisplay from "./chat-display";
import { useState } from "react";
import { createCode } from "@/config/gemini";
import { extractCode } from "@/lib/utils";

const Home = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [framework, setFramework] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleGenerateCode = async () => {
    const response = await createCode(prompt, framework);
    const extractedCode = extractCode(response);
    setCode(extractedCode);
  };

  return (
    <section className="w-full h-full lg:h-[85vh] mt-5 flex pb-10 flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 px-6 lg:p-0 ">
      <ChatInputArea
        prompt={prompt}
        setPrompt={setPrompt}
        framework={framework}
        setFramework={setFramework}
        handleGenerateCode={handleGenerateCode}
      />
      <ChatDisplay code={code} />
    </section>
  );
};

export default Home;
