import { cn } from "../../lib/utils";
import type { Product } from "../../types/inventory";
import Button from "./button";
import Icon from "../../lib/iconConfig";
import { CustomClasses } from "./customClasses";

export function TableItem({data, setIsEditFormOpen}: {data?: Product, setIsEditFormOpen: (open: boolean) => void}) {
    return (
        <tr className={cn("border-2 border-black")}>
            <td className={cn(CustomClasses.tableCell)}>{data?.id}</td>
            <td className={cn(CustomClasses.tableCell)}>{data?.productName}</td>
            <td className={cn(CustomClasses.tableCell, "font-bold uppercase font-['Archivo Black']")}>{data?.category}</td>
            <td className={cn(CustomClasses.tableCell, "font-bold text-2xl font-['Space Mono']")}>{data?.quantity}</td>
            <td className={cn(CustomClasses.tableCell)}>
                {
                    data?.quantity === 0 ? 
                        <span className={cn(CustomClasses.shadowBox,"p-2 font-bold font-['Archivo Black']")}>OUT OF STOCK</span> : 
                        <span className={cn(CustomClasses.shadowBox, "p-2 font-bold font-['Archivo Black']")}>IN WAREHOUSE</span> 
                }
            </td>
            <td className={cn(CustomClasses.tableCell, "border-0 flex justify-center items-center")}>
                <Button className={cn(CustomClasses.shadowBox, CustomClasses.yellowButton, "cursor-pointer") } onClick={() => setIsEditFormOpen(true)}>
                    <Icon name="edit" className={cn("size-8 p-1")} />
                </Button>
            </td>
        </tr>
    );
}