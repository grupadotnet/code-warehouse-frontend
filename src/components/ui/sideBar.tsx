import { cn } from "../../lib/utils";
import { CustomClasses } from "../utilities/customClasses";
import Filters from "./filters";
import Icon from "../../lib/iconConfig";
import Button from "./button";

export default function SideBar() {
    return (
        <div className={cn("flex flex-col w-1/6 h-full border", CustomClasses.shadowBox)}>
            <div className={cn("flex flex-col m-3 mb-0")}>
                <h1 className={cn("flex flex-row items-center gap-2 m-2 font-bold text-xl")}>
                    <div className={cn(CustomClasses.centerIcon, CustomClasses.yellowButton, "w-10 h-10 border-2 border-black")}>
                        <Icon name="filter" className={cn("size-6")} />
                    </div>
                    <span className={cn("font-['Archivo Black']")}>FILTERS</span>
                </h1>
            </div>
            <hr className={cn("border-2 border-black my-2 mx-3")}/>
            <div className={cn("flex flex-col items-center gap-2 ml-3 overflow-y-auto pr-4 pl-1")}>
                <Filters/>
            </div>
            <div className={cn("flex flex-col gap-2 m-3 mt-auto")}>
                <Button name="APPLY FILTERS" className={cn("w-full bg-black text-white", CustomClasses.filterButton)} />
                <Button name="CLEAR ALL" className={cn("w-full bg-(--clearAllFilterBtn) text-black", CustomClasses.filterButton)} />
            </div>
        </div>
    );
}