import Icon from "../../lib/iconConfig";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import { cn } from "../../lib/utils";

export default function UserMenu() {
    return (
        <div className={cn("flex justify-center items-center flex-row gap-4")}>
            <div className={cn("relative")}>
                <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, CustomClasses.userMenuButton, "m-3")}>
                    <Icon name="alert" className="size-10" />
                </Button>
                <span className={cn("absolute top-0 right-0 w-4 h-4 font-bold border-2 p-3 text-xl flex flex-col justify-center items-center bg-(--notificationPopUpBg)")}>5</span>
            </div>
            <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, CustomClasses.userMenuButton)}>
                <Icon name="user" className="size-10" />
            </Button>   
        </div>
    );
}