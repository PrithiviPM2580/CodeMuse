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
import { toast } from "sonner";

interface ChatDisplayProps {
  code: string;
  codeDisplay: boolean;
}

const ChatDisplay = ({ code, codeDisplay }: ChatDisplayProps) => {
  const [tab, setTab] = useState<number>(0);
  const [isNewTab, setIsNewTab] = useState<boolean>(false);
  const [previewKey, setPreviewKey] = useState<number>(0);
  const { theme } = useTheme();

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy code to clipboard.");
      console.error("Failed to copy code to clipboard:", error);
    }
  };

  const downloadFile = () => {
    const fileName = "codemuse.html";

    const blob = new Blob([code], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
    toast.success("File downloaded successfully!");
  };

  return (
    <div className="flex-1 chat-display overflow-hidden pb-10 lg:pb-40!">
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
                  <div
                    className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic"
                    onClick={copyCodeToClipboard}
                  >
                    <CopyIcon className="w-5 h-5" />
                  </div>
                  <div
                    className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic"
                    onClick={downloadFile}
                  >
                    <ShareIcon className="w-5 h-5" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic"
                    onClick={() => setIsNewTab(true)}
                  >
                    <TvMinimalIcon className="w-5 h-5" />
                  </div>
                  <div
                    className="w-12 h-12 flex-center rounded-full inset-shadow-ppm circle-hover transition-cubic"
                    onClick={() => setPreviewKey((prev) => prev + 1)}
                  >
                    <RefreshCwIcon className="w-5 h-5" />
                  </div>
                </>
              )}
            </div>
          </div>
          {tab === 0 ? (
            <div className="mt-4 w-full h-full overflow-hidden chat-display-editor">
              <Editor
                className="w-full h-[60vh] lg:h-full"
                theme={theme === "light" ? "light" : "vs-dark"}
                language="html"
                value={code}
              />
            </div>
          ) : (
            <iframe
              key={previewKey}
              className="w-full h-full chat-display-editor py-0! mt-4"
              srcDoc={code}
            ></iframe>
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

      {isNewTab && (
        <iframe
          key={previewKey}
          srcDoc={code}
          className="w-full h-full absolute top-0 left-0 z-10"
        ></iframe>
      )}
    </div>
  );
};

export default ChatDisplay;
