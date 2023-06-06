import Footer from "../components/Footer";
import CardForm from "../features/products/components/CardForm";

export default function Products() {
  return (
    <div>
      <div className="grid grid-cols-3  ">
        <CardForm />
        <CardForm />
        <CardForm />
        <CardForm />
        <CardForm />
        <CardForm />
        <div className="mb-6"></div>
      </div>
      <Footer />
    </div>
  );
}
