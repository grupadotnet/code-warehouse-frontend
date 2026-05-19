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
import { useEffect, useMemo, useState } from "react";
import { useTableFilters } from "../hooks/useTableFilters";

export default function Layout() {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const tableFilters = useTableFilters();
  function handleSetCurrentPage(page: number) {
    if (page < 1) {
      tableFilters.setPage(1);
    } else if (page > pages) {
      tableFilters.setPage(pages);
    } else {
      tableFilters.setPage(page);
    }
  }
  const itemsPerPage = 7;
  const categories = useMemo(
    () => Array.from(new Set(mockedProducts.map((product) => product.category))),
    [],
  );
  const filteredProducts = useMemo(() => {
    const search = tableFilters.search.toLowerCase();

    return mockedProducts.filter((product) => {
      const matchesCategory =
        !tableFilters.category || product.category === tableFilters.category;
      const matchesSearch =
        !search ||
        product.productName.toLowerCase().includes(search) ||
        product.barcode.toLowerCase().includes(search) ||
        product.producer.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [tableFilters.category, tableFilters.search]);
  const pages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));

  useEffect(() => {
    if (tableFilters.page > pages) {
      tableFilters.setPage(pages);
    }
  }, [pages, tableFilters]);

  return (
    <div className={cn("flex flex-col gap-4 h-screen w-full p-3")}>
      <Header search={tableFilters.search} setSearch={tableFilters.setSearch} />
      <div className={cn("flex flex-row gap-4 flex-1 overflow-hidden")}>
        <SideBar
          categories={categories}
          selectedCategory={tableFilters.category}
          setSelectedCategory={tableFilters.setCategory}
          clearFilters={tableFilters.clearFilters}
        />
        <div className={cn("flex flex-col gap-4 flex-1 min-w-0")}>
          <div
            className={cn(
              "flex flex-row gap-4 w-full items-start justify-between",
            )}
          >
            <div className={cn("flex-1 min-w-0 overflow-x-auto pb-4 pr-4")}>
              <SelectedFilters
                selectedFilters={[
                  tableFilters.search,
                  tableFilters.category,
                ].filter(Boolean)}
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
                data={filteredProducts}
                number={itemsPerPage}
                page={tableFilters.page}
                setIsEditFormOpen={setIsEditFormOpen}
              />
              <TableNavigation
                pages={pages}
                currentPage={tableFilters.page}
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
