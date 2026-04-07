import { cn } from "../../lib/utils";
import { Filter } from "../utilities/filter";

export default function Filters() {
    return (
        <div className={cn("flex flex-col w-full gap-4")}>
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
           <Filter name="Category" items={["Category 1", "Category 2", "Category 3"]} />
        </div>
    );
}