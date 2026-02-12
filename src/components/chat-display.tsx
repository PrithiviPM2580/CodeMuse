import {
  CodeXml,
  CopyIcon,
  RefreshCwIcon,
  ShareIcon,
  TvMinimalIcon,
} from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ChatDisplay = ({ code }: { code: string }) => {
  const [codeDisplay, setCodeDisplay] = useState<boolean>(true);
  const [tab, setTab] = useState<number>(0);
  const { theme } = useTheme();

  return (
    <div className="flex-1 chat-display overflow-hidden pb-40!">
      {codeDisplay ? (
        <>
          <div className="w-full flex gap-4 items-center justify-between">
            <Button
              onClick={() => setTab(0)}
              variant="secondary"
              className={cn("btn flex-1!", tab === 0 && "btn-click")}
            >
              Code
            </Button>
            <Button
              onClick={() => setTab(1)}
              variant="secondary"
              className={cn("btn flex-1!", tab === 1 && "btn-click")}
            >
              Preview
            </Button>
          </div>
          <div className="w-full flex items-center justify-between mt-3">
            <h1 className="font-semibold">Code Editor</h1>
            <div className="flex gap-3">
              {tab === 0 ? (
                <>
                  <div className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic">
                    <CopyIcon className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic">
                    <ShareIcon className="w-5 h-5" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic">
                    <TvMinimalIcon className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic">
                    <RefreshCwIcon className="w-5 h-5" />
                  </div>
                </>
              )}
            </div>
          </div>
          {tab === 0 ? (
            <div className="mt-4 w-full h-full overflow-hidden chat-display-editor">
              <Editor
                className="w-full h-full"
                theme={theme === "light" ? "light" : "vs-dark"}
                language="html"
                value={code}
              />
            </div>
          ) : (
            <div className="w-full h-full chat-display-editor mt-4">
              <h1>Hello</h1>
            </div>
          )}
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
