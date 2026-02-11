import { SunIcon, MoonIcon, MonitorCogIcon } from "lucide-react";

export const THEMES = [
  {
    id: 1,
    name: "light" as const,
    icon: SunIcon,
  },
  {
    id: 2,
    name: "dark" as const,
    icon: MoonIcon,
  },
  {
    id: 3,
    name: "system" as const,
    icon: MonitorCogIcon,
  },
] as const;

export const SELECT_OPTIONS = [
  { value: "html-css", label: "HTML/CSS" },
  { value: "html-tailwind", label: "HTML/Tailwind" },
  { value: "html-bootstrap", label: "HTML/Bootstrap" },
  { value: "html-css-js", label: "HTML/CSS/JS" },
  { value: "html-bootstrap-js", label: "HTML/Bootstrap/JS" },
  { value: "html-tailwind-js", label: "HTML/Tailwind/JS" },
];
