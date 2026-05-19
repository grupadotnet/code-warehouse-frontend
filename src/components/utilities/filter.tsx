import { cn } from "../../lib/utils";
import Icon from "../../lib/iconConfig";
import { CustomClasses } from "./customClasses";

export function Filter({
    name,
    items,
    selectedItem,
    setSelectedItem,
}: {
    name: string;
    items: string[];
    selectedItem: string;
    setSelectedItem: (item: string) => void;
}) {
    return (
        <div className={cn("flex flex-col border-2 border-black bg-(--filterSection)")}>
            <h1 className={cn("flex flex-row items-center gap-2 m-2 ml-3 font-bold text-xl cursor-pointer")}>
                {name}
                <div className={cn(CustomClasses.centerIcon, "ml-auto")}>
                    <Icon name="dropUp" className={cn("size-7")} />
                </div>
            </h1>
            <hr className={cn("border-t-2 border-black w-full m-0")} />
            <ul className={cn("flex flex-col gap-2 mx-2 p-2")}>
                {items.map((item, index) => (
                    <li key={index} className={cn("flex flex-row items-center gap-2")}>
                        <label className={cn("flex flex-row items-center gap-2 cursor-pointer")}>
                            <input
                                type="checkbox"
                                checked={selectedItem === item}
                                onChange={() => setSelectedItem(selectedItem === item ? "" : item)}
                                className={cn("w-4 h-4 appearance-none border border-black checked:bg-black cursor-pointer")}
                            />
                            <span className={cn("text-black/60")}>{item}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
