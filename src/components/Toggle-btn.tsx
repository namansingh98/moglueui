"use-client"


export function Togglebtn() {
  const { theme, setTheme } = useTheme();

  const switchHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center space-x-2">
      <label>
        <IoMoonOutline />
      </label>
      <Switch
        id="dark"
        onClick={switchHandler}
        className="w-10 h-6 rounded-full bg-gray-300"
      />
      <label>
        <IoSunnyOutline />
      </label>
    </div>
  );
}
