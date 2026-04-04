import SearchBar from "./searchbar";
import UserMenu from "./userMenu";
import { cn } from "../../lib/utils";

export function Header() {
    return (
        <div className={cn("flex flex-row justify-between items-center gap-4")}>
            <SearchBar />
            <UserMenu />
        </div>
    );
}