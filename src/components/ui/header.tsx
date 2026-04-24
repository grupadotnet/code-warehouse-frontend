import SearchBar from "./searchbar";
import UserMenu from "./userMenu";
import { cn } from "../../lib/utils";

export function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/login";
  };
  const user = localStorage.getItem("username");

  return (
    <div className={cn("flex flex-row justify-between items-center gap-4")}>
      <SearchBar />
      <UserMenu />
      <div className="flex flex-col px-8">
        <p className="text-sm">Witaj,{user}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded shadow transition w-full mt-1"
        >
          Wyloguj się
        </button>
      </div>
    </div>
  );
}
