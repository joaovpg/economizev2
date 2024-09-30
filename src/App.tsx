import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const darkModeHandle: React.ChangeEventHandler<HTMLInputElement> = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  useLayoutEffect(() => {
    const defaultDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.setAttribute(
      "data-theme",
      defaultDark ? "dark" : "light"
    );
    setTheme(defaultDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section className="p-6 flex flex-col gap-6">
      <label className="switch">
        <input
          title="toggle"
          type="checkbox"
          className="toggle"
          id="toggle"
          checked={theme === "light"}
          onChange={darkModeHandle}
        />
        <span className="slider"></span>
      </label>

      <button className="py-2 px-6 bg-primary-200 text-white-primary dark:text-black-primary rounded-[4px] font-bold hover:bg-primary-400 active:bg-primary-300 ease-in-out duration-100 focus:ring focus:ring-primary-200 focus:ring-offset-background focus:ring-offset-2 outline-none">
        Salvar
      </button>
    </section>
  );
}

export default App;
