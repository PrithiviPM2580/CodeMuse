import { CodeXml } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

const ChatDisplay = () => {
  const [codeDisplay, setCodeDisplay] = useState<boolean>(true);
  const { theme } = useTheme();

  return (
    <div className="flex-1 chat-display overflow-hidden pb-20!">
      {codeDisplay ? (
        <>
          <div className="w-full flex gap-4 items-center justify-between">
            <Button variant="secondary" className="btn flex-1!">
              Code
            </Button>
            <Button variant="secondary" className="btn flex-1!">
              Preview
            </Button>
          </div>
          <div className="mt-4 w-full h-full overflow-hidden chat-display-editor">
            <Editor
              className="w-full h-full"
              theme={theme === "light" ? "light" : "vs-dark"}
              defaultLanguage="javascript"
              defaultValue="// some comment"
            />
          </div>
        </>
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
