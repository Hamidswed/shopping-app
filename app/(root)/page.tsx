import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

async function HomePage() {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="محصولات" limit={4} />
    </>
  );
}

export default HomePage;
