import BestSales from "../molecules/BestSales";
import StoreBanner from "../molecules/StoreBanner";

const Recommendation = () => {
  return (
    <section className="flex justify-between items-center px-10 py-6">
      <BestSales />
      <StoreBanner />
    </section>
  );
};

export default Recommendation;
