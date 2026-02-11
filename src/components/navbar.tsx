import { SquareTerminal } from "lucide-react";
import { Button } from "./ui/button";
import { THEMES } from "@/constants";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleMouseAnimation = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <header className="navbar">
      <div className="w-12 h-12 flex-center rounded-xl inset-shadow-ppm">
        <SquareTerminal className="w-5 h-5" />
      </div>
      <div className="theme-container">
        {THEMES.map((themeOption) => (
          <Button
            key={themeOption.id}
            id={themeOption.name}
            variant="ghost"
            size="icon"
            className={cn(
              "w-10 h-10 transition-cubic",
              activeButton === themeOption.name && "inset-shadow-ppm",
            )}
            onClick={() => setTheme(themeOption.name)}
            onMouseEnter={() => handleMouseAnimation(themeOption.name)}
          >
            <themeOption.icon className="h-4 w-4 rounded-full p-0" />
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
