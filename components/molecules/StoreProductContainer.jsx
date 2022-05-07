import StoreCategory from "./StoreCategory";
import Products from "./Products";
import StoreSearch from "./StoreSearch";

const StoreProductContainer = () => {
  return (
    <section className="px-10 w-screen flex py-10">
      <StoreCategory />
      <div className="flex flex-col w-2/3">
        <StoreSearch />
        <Products />
      </div>
    </section>
  );
};

export default StoreProductContainer;
