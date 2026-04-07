import { cn } from "../../lib/utils";
import Button from "./button";
import Icon from "../../lib/iconConfig";
import { CustomClasses } from "../utilities/customClasses";

export default function SearchBar() {
    return (
       <div className={cn("flex flex-row w-full border h-12", CustomClasses.shadowBox)}>
            <Button className={cn(CustomClasses.yellowButton, CustomClasses.centerIcon, "p-1 border-r-2 border-black w-[40px]")}>
                <Icon name="search" className={cn("size-5")}/>
            </Button>
            <input type="text" placeholder="Search inventory..." className={cn("border-none outline-none m-1 ml-2 w-full text-xs")}/>
        </div>
    );
}