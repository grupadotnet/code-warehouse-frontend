import { cn } from "../../lib/utils";
import { Filter } from "../utilities/filter";

export default function Filters({
    categories,
    selectedCategory,
    setSelectedCategory,
}: {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}) {
    return (
        <div className={cn("flex flex-col w-full gap-4")}>
           <Filter
            name="Category"
            items={categories}
            selectedItem={selectedCategory}
            setSelectedItem={setSelectedCategory}
           />
        </div>
    );
}
