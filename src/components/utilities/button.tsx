import { cn } from "../../lib/utils";

export default function Button({children, name, className, onClick}: {children?: React.ReactNode, name?: string, className?: string, onClick?: () => void}) {
    if(name){
        return(
            <button className={cn(className)} onClick={onClick}>
                {name}
            </button>
        )
    }
    return (
        <button className={cn(className)} onClick={onClick}>{children}</button>
    );
}