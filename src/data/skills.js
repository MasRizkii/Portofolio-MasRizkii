import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const skillColumns = [
  [
    { name: "HTML", icon: SiHtml5, color: "#f06529", level: 95 },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 80 },
    { name: "React.js", icon: SiReact, color: "#61dafb", level: 80 },
  ],
  [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 65 },
    { name: "Laravel", icon: SiLaravel, color: "#ff2d20", level: 95 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", level: 95 },
  ],
  [
    { name: "Node.js", icon: SiNodedotjs, color: "#83cd29", level: 80 },
    { name: "Github", icon: SiGithub, color: "#ffffff", level: 95 },
    { name: "Python", icon: SiPython, color: "#ffd343", level: 75 },
  ],
];
