import { cn } from "../../lib/utils";
import { FilterSelected } from "../utilities/filterSelected";

export default function SelectedFilters({selectedFilters}: {selectedFilters: string[]}) {
    return (
        <div className={cn("flex flex-row gap-4 w-max")}>
            {selectedFilters.map((filter, index) => (
                <FilterSelected key={index} name={filter} />
            ))}
        </div>
    );
}