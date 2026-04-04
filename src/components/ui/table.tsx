import { cn } from "../../lib/utils";
import { TableItem } from "../utilities/tableItem";
import type { Product } from "../../types/inventory";
import { HeaderItems } from "../utilities/headerItems";

export default function Table({data, number, page, setIsEditFormOpen}: {data: Product[], number: number, page: number, setIsEditFormOpen: (open: boolean) => void}) {
    return (
        <div className={cn("flex flex-col gap-4 h-auto")}>
            <table className={cn("w-full border-2 border-black")}>
                <thead className={cn("bg-black text-white")}>
                    <tr>
                        <HeaderItems name="SKU" />
                        <HeaderItems name="PRODUCT NAME" />
                        <HeaderItems name="CATEGORY" />
                        <HeaderItems name="QTY" />
                        <HeaderItems name="STATUS" />
                        <HeaderItems />
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        index >= (page - 1) * number && index < page * number && <TableItem key={index} data={item} setIsEditFormOpen={setIsEditFormOpen}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}