import SearchBar from "./searchbar";
import UserMenu from "./userMenu";
import { cn } from "../../lib/utils";

export function Header() {
  const handleLogout = () => {
    // 1. Czyścimy localStorage
    localStorage.removeItem("token");

    // 2. Opcjonalnie: czyścimy inne dane, jeśli je tam trzymasz
    localStorage.clear(); // To wyczyści wszystko

    // 3. Przekierowujemy do strony logowania
    window.location.href = "/login";
    // Używamy window.location zamiast navigate,
    // żeby "odświeżyć" stan całej aplikacji i routera
    console.log("Wylogowano! Token usunięty, przekierowanie do logowania.");
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
