import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full transition-colors">
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-orange-500 transition-transform hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 text-blue-400 transition-transform hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
