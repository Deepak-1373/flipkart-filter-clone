import React from "react";
import { useFilters } from "../context/filterContext";

export const Filter = () => {
  const { sortBy, brands, sizes, idealFor, filterDispatch } = useFilters();

  const handleClearAllClick = () => {
    filterDispatch({ type: "CLEAR_FILTER" });
  };

  const handleSortChange = (sortByType) => {
    filterDispatch({ type: "SET_SORT_BY", payload: sortByType });
  };

  const handleIdealForChange = (e) => {
    filterDispatch({ type: "SET_IDEAL_FOR", payload: e.target.value });
  };

  const handleSizeChange = (e) => {
    filterDispatch({ type: "SET_SIZE", payload: e.target.value });
  };

  const handleBrandChange = (e) => {
    filterDispatch({ type: "SET_BRAND", payload: e.target.value });
  };

  return (
    <aside className="w-[20rem] p-8">
      <section>
        <div className="w-full flex items-center justify-between">
          <span className="font-semibold">Sort by</span>
          <button className="hover:underline" onClick={handleClearAllClick}>
            Clear all
          </button>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            checked={sortBy === "LOW_TO_HIGH"}
            id="low to high"
            onChange={() => handleSortChange("LOW_TO_HIGH")}
          />
          <label className="ml-2" htmlFor="low to high">
            Low to High
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => handleSortChange("HIGH_TO_LOW")}
            id="high to low"
          />
          <label className="ml-2" htmlFor="high to low">
            High to Low
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Ideal for</span>
        <div>
          <input
            type="checkbox"
            value="men"
            checked={idealFor.men}
            onChange={handleIdealForChange}
            id="ideal for men"
          />
          <label className="ml-2" htmlFor="ideal for men">
            Ideal for men
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="women"
            checked={idealFor.women}
            onChange={handleIdealForChange}
            id="ideal for women"
          />
          <label className="ml-2" htmlFor="ideal for women">
            Ideal for women
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Size</span>
        <div>
          <input
            type="checkbox"
            value="s"
            checked={sizes.s}
            onChange={handleSizeChange}
            id="small"
          />
          <label className="ml-2" htmlFor="small">
            Small
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="m"
            checked={sizes.m}
            onChange={handleSizeChange}
            id="medium"
          />
          <label className="ml-2" htmlFor="medium">
            Medium
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="l"
            checked={sizes.l}
            onChange={handleSizeChange}
            id="large"
          />
          <label className="ml-2" htmlFor="large">
            Large
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="xl"
            checked={sizes.xl}
            onChange={handleSizeChange}
            id="extra large"
          />
          <label className="ml-2" htmlFor="extra large">
            Extra Large
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Brands</span>
        <div>
          <input
            type="checkbox"
            value="adidas"
            checked={brands.adidas}
            onChange={handleBrandChange}
            id="adidas"
          />
          <label className="ml-2" htmlFor="adidas">
            Adidas
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="eyebogler"
            checked={brands.eyebogler}
            onChange={handleBrandChange}
            id="eyebogle"
          />
          <label className="ml-2" htmlFor="eyebogle">
            Eyebogle
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="allensolly"
            checked={brands.allensolly}
            onChange={handleBrandChange}
            id="allen solly"
          />
          <label className="ml-2" htmlFor="allen solly">
            Allen Solly
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="killer"
            checked={brands.killer}
            onChange={handleBrandChange}
            id="killer"
          />
          <label className="ml-2" htmlFor="killer">
            Killer
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="biba"
            checked={brands.biba}
            onChange={handleBrandChange}
            id="biba"
          />
          <label className="ml-2" htmlFor="biba">
            Biba
          </label>
        </div>
      </section>
    </aside>
  );
};
