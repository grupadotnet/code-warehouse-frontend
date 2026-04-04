import { cn } from "../../lib/utils";
import Button from "./button";
import Icon from "../../lib/iconConfig";
import { CustomClasses } from "../utilities/customClasses";

export default function TableNavigation({pages, currentPage, setCurrentPage}: {pages: number, currentPage: number, setCurrentPage: (page: number) => void}) {
    return (
        <div className={cn("flex flex-row gap-4 w-auto items-center justify-center")}>
            <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, "m-1 p-1")} onClick={() => setCurrentPage(1)}>
                <Icon name="doubleArrowLeft" className={cn("size-8")} />
            </Button>
            <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, "m-1 p-1")} onClick={() => setCurrentPage(currentPage - 1)}>
                <Icon name="arrowLeft" className={cn("size-8")} />
            </Button>
            {Array.from({ length: pages }, (_, i) => (
                <Button key={i} className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, "m-1 p-1 w-10 h-10", i + 1 === currentPage ? CustomClasses.yellowButton :"")} onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                </Button>
            ))}
            <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, "m-1 p-1")} onClick={() => setCurrentPage(currentPage + 1)}>
                <Icon name="arrowRight" className={cn("size-8")} />
            </Button>
            <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, "m-1 p-1")} onClick={() => setCurrentPage(pages)}>
                <Icon name="doubleArrowRight" className={cn("size-8")} />
            </Button>
        </div>
    );
}