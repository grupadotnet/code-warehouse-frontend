import { cn } from "../../lib/utils";
import Icon from "../../lib/iconConfig";
import { CustomClasses } from "./customClasses";

export function FilterSelected({name}: {name: string}) {
    return (
        <div className={cn("flex flex-row items-center gap-3 p-2", CustomClasses.shadowBox, CustomClasses.yellowButton)}>
            <h1 className={cn("font-black text-xl uppercase font-['Archivo Black']")}>{name}</h1>
            <Icon name="close" className={cn("size-9 cursor-pointer")} />
        </div>
    );
}