import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3 lg:grid-cols-4">
          {data.product.map((item) => {
            return <ProductItem product={item} key={item.slug}></ProductItem>;
          })}
        </div>
      </Layout>
    </>
  );
}
