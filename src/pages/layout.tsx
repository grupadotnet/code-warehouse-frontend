import Table from "../components/ui/table";
import { Header } from "../components/ui/header";
import { cn } from "../lib/utils";
import SideBar from "../components/ui/sideBar";
import SelectedFilters from "../components/ui/selectedFilters";
import Button from "../components/utilities/button";
import Icon from "../lib/iconConfig";
import { CustomClasses } from "../components/utilities/customClasses";
import EditForm from "../components/ui/editForm";
import { mockedProducts } from "../api/mockeddata";
import TableNavigation from "../components/ui/tableNavigation";
import { useState } from "react";

export default function Layout() {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  function handleSetCurrentPage(page: number) {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > pages) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(page);
    }
  }
  const itemsPerPage = 7;
  const pages = Math.ceil(mockedProducts.length / itemsPerPage);

  return (
    <div className={cn("flex flex-col gap-4 h-screen w-full p-3")}>
      <Header />
      <div className={cn("flex flex-row gap-4 flex-1 overflow-hidden")}>
        <SideBar />
        <div className={cn("flex flex-col gap-4 flex-1 min-w-0")}>
          <div
            className={cn(
              "flex flex-row gap-4 w-full items-start justify-between",
            )}
          >
            <div className={cn("flex-1 min-w-0 overflow-x-auto pb-4 pr-4")}>
              <SelectedFilters
                selectedFilters={[
                  "test",
                  "test2",
                  "test3",
                  "test4",
                  "test5",
                  "test6",
                  "test7",
                  "test8",
                  "test9",
                  "test10",
                  "test11",
                  "test12",
                  "test13",
                  "test14",
                  "test15",
                  "test16",
                  "test17",
                  "test18",
                  "test19",
                  "test20",
                ]}
              />
            </div>
            <div className={cn("shrink-0")}>
              <Button
                className={cn(
                  CustomClasses.shadowBox,
                  CustomClasses.centerIcon,
                  "w-15 h-15 size-15 text-2xl mr-1 bg-(--openEditFormBtnBg)",
                )}
              >
                <Icon name="plus" className={cn("size-11")} />
              </Button>
            </div>
          </div>
          <div className={cn("flex flex-row gap-4 h-full justify-between")}>
            <div className={cn("flex flex-col h-full gap-4 w-full")}>
              <Table
                data={mockedProducts}
                number={itemsPerPage}
                page={currentPage}
                setIsEditFormOpen={setIsEditFormOpen}
              />
              <TableNavigation
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={handleSetCurrentPage}
              />
            </div>
            <div
              className={cn(
                "h-full w-1/3 gap-4",
                isEditFormOpen ? "block" : "hidden",
              )}
            >
              <EditForm setIsEditFormOpen={setIsEditFormOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
