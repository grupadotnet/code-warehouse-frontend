import { useSearchParams } from "react-router-dom";

export function useTableFilters() {
  const [params, setParams] = useSearchParams();

  const page = Math.max(1, Math.floor(Number(params.get("page")) || 1));
  const search = params.get("search") ?? "";
  const category = params.get("category") ?? "";

  const updateParam = (key: "search" | "page" | "category", value: string) => {
    setParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);
      const nextValue = value.trim();

      if (!nextValue || (key === "page" && nextValue === "1")) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, nextValue);
      }

      if (key !== "page") {
        nextParams.delete("page");
      }

      return nextParams;
    });
  };

  return {
    page,
    search,
    category,
    setPage: (nextPage: number) => updateParam("page", String(nextPage)),
    setSearch: (nextSearch: string) => updateParam("search", nextSearch),
    setCategory: (nextCategory: string) => updateParam("category", nextCategory),
    clearFilters: () => {
      setParams((currentParams) => {
        const nextParams = new URLSearchParams(currentParams);

        nextParams.delete("search");
        nextParams.delete("page");
        nextParams.delete("category");

        return nextParams;
      });
    },
  };
}
