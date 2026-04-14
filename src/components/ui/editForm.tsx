import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import Icon from "../../lib/iconConfig";

export default function EditForm({setIsEditFormOpen}: {setIsEditFormOpen: (open: boolean) => void}) {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('Changes saved');
        event.preventDefault();
    }
    
    return (
        <div className={cn("gap-4 h-auto w-full border-2 border-black p-4")}>
            <form className={cn("flex flex-col gap-2 h-auto w-full")} onSubmit={handleSubmit} >
                <label className={cn("flex flex-row gap-2 items-center justify-between mx-1")}>
                    <Icon name="editProduct" className={cn("size-10 border-2 border-black p-1 bg-(--deleteEditFormBtnBg)")} />
                    <span className={cn("flex flex-row gap-2 items-center text-black/60")}>
                        SKU:
                        <span className={cn("font-bold text-black uppercase")}>
                            ID
                        </span>
                    </span>
                    <Icon name="close" className={cn("size-10 border-2 border-black p-1 bg-(--placeholderEditFormBg) cursor-pointer")} onClick={() => setIsEditFormOpen(false)}/>
                </label>
                <hr className={cn("border-2 border-black")} />
               <label className={cn(CustomClasses.editFormLabel)}>
                    Name
               </label>
               <input type="text" placeholder="Product name" className={cn(CustomClasses.editFormInput)} />

               <label className={cn(CustomClasses.editFormLabel)}>
                    Producer
               </label>
               <input type="text" placeholder="Producer name" className={cn(CustomClasses.editFormInput)} />

               <label className={cn(CustomClasses.editFormLabel)}>
                    Location
               </label>
               <input type="text" placeholder="Location" className={cn(CustomClasses.editFormInput)} />

               <label className={cn(CustomClasses.editFormLabel)}>
                    Quantity
               </label>
               <input type="number" placeholder="0" className={cn(CustomClasses.editFormInput, "no-spinners")} />
                <div className={cn("mt-5 flex flex-col gap-3")}>
                    <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, CustomClasses.editFormButton, "bg-black text-white border-3")}>
                        SAVE CHANGES
                    </Button>
                    <Button className={cn(CustomClasses.shadowBox, CustomClasses.centerIcon, CustomClasses.editFormButton, "text-black border-3 bg-(--deleteEditFormBtnBg)")}>
                        DELETE ITEM
                    </Button>
                </div>
                
            </form>   
        </div>
    );
}