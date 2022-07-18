import React from "react";

export const Filter = () => {
  return (
    <aside className="w-[20rem] p-8">
      <section>
        <div className="w-full flex items-center justify-between">
          <span className="font-semibold">Sort by</span>
          <button className="hover:underline">Clear all</button>
        </div>
        <div>
          <input type="radio" name="Low to high" id="low to high" />
          <label className="ml-2" htmlFor="low to high">
            Low to High
          </label>
        </div>
        <div>
          <input type="radio" name="high to low" id="high to low" />
          <label className="ml-2" htmlFor="high to low">
            High to Low
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Ideal for</span>
        <div>
          <input type="checkbox" name="ideal for men" id="ideal for men" />
          <label className="ml-2" htmlFor="ideal for men">
            Ideal for men
          </label>
        </div>
        <div>
          <input type="checkbox" name="ideal for women" id="ideal for women" />
          <label className="ml-2" htmlFor="ideal for women">
            Ideal for women
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Size</span>
        <div>
          <input type="checkbox" name="small" id="small" />
          <label className="ml-2" htmlFor="small">
            Small
          </label>
        </div>
        <div>
          <input type="checkbox" name="medium" id="medium" />
          <label className="ml-2" htmlFor="medium">
            Medium
          </label>
        </div>
        <div>
          <input type="checkbox" name="large" id="large" />
          <label className="ml-2" htmlFor="large">
            Large
          </label>
        </div>
        <div>
          <input type="checkbox" name="extra large" id="extra large" />
          <label className="ml-2" htmlFor="extra large">
            Extra Large
          </label>
        </div>
      </section>

      <section className="mt-4 flex flex-col">
        <span className="font-semibold">Brands</span>
        <div>
          <input type="checkbox" name="adidas" id="adidas" />
          <label className="ml-2" htmlFor="adidas">
            Adidas
          </label>
        </div>
        <div>
          <input type="checkbox" name="eyebogle" id="eyebogle" />
          <label className="ml-2" htmlFor="eyebogle">
            Eyebogle
          </label>
        </div>
        <div>
          <input type="checkbox" name="allen solly" id="allen solly" />
          <label className="ml-2" htmlFor="allen solly">
            Allen Solly
          </label>
        </div>
        <div>
          <input type="checkbox" name="killer" id="killer" />
          <label className="ml-2" htmlFor="killer">
            Killer
          </label>
        </div>
        <div>
          <input type="checkbox" name="biba" id="biba" />
          <label className="ml-2" htmlFor="biba">
            Biba
          </label>
        </div>
      </section>
    </aside>
  );
};
