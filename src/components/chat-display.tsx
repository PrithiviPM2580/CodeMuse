import { CodeXml } from "lucide-react";

const ChatDisplay = () => {
  const ifNoCode = false;

  return (
    <div className="flex-1 chat-display">
      {ifNoCode ? (
        <div>Hello</div>
      ) : (
        <div className="w-full h-full">
          <div className="w-full h-full flex-center flex-col gap-3">
            <div className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic">
              <CodeXml className="w-5 h-5 " />
            </div>
            <p className="text-center text-slate-600 dark:text-slate-200">
              Your component & code will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatDisplay;
