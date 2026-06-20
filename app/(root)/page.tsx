import ProductList from "@/components/shared/product/ProductList";
import data from "@/data/product";

function HomePage() {
  return (
    <>
      <ProductList data={data.products} title="محصولات" limit={8} />
    </>
  );
}

export default HomePage;
