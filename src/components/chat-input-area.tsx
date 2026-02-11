import { SELECT_OPTIONS } from "@/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const ChatInputArea = () => {
  return (
    <div className="flex-1 chat-input-area flex flex-col gap-3 ">
      <h1 className="text-2xl font-bold">AI Component Generator</h1>
      <p className="text-base">
        Describe your component and let AI code it for you.
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">Framework</h1>
        <Select>
          <SelectTrigger className="w-full max-w-80  inset-shadow-ppm">
            <SelectValue placeholder="Select a framework..." />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup className="select-input">
              {SELECT_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="select-input"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <h1 className="text-lg font-semibold">Describe your component</h1>
      <Textarea
        placeholder="Describe your component in detail and let AI code it for you..."
        className="text-area"
      />
      <div className="w-full flex items-center justify-between mt-3">
        <p className="text">Click the button to generate your component:</p>
        <Button
          className="btn outline-none! cursor-pointer transition-cubic"
          variant="secondary"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Generate
        </Button>
      </div>
    </div>
  );
};

export default ChatInputArea;
