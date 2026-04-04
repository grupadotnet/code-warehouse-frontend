import { cn } from "../../lib/utils";
import Icon from "../../lib/iconConfig";

export function HeaderItems({name}: {name?: string}) {
    return (
        <th className={cn("p-5")}>
            <div className={cn("flex flex-row items-center justify-center gap-2 cursor-pointer")}>
                <span className={cn("font-['Space Grotesk']")}>{name}</span>
                {name && <Icon name="sortArrows" className={cn("size-5")} />}
            </div>
        </th>
    );
}