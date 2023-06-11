import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CardForm from "../features/products/components/CardForm";

export default function Products() {
  return (
    <div>
    <div className="flex gap-4">
      <Sidebar/>
      <div className="grid grid-cols-3 gap-4 ">
        <CardForm src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg" name ='Apple iphone 14 plus' brand='Apple' price='42,000฿'/>
        <CardForm src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3i/ideapad-slim-3i-0010-500x500.jpg" name ='Lenovo IdeaPad Slim 3i ' brand='Lenovo' price='35,000฿'/>
        <CardForm src="https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp" name ='Apple MacBook Air 13' brand='Apple' price='32,900฿'/>
        <CardForm src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-x515ka/vivobook-x515ka-slate-grey-01-500x500.webp" name ='Asus Vivobook X515KA ' brand='Asus' price='43,800฿'/>
        <CardForm src="https://www.startech.com.bd/image/cache/catalog/mobile/infinix/smart-6-plus/smart-6-plus-crystal-violet-500x500.webp" name ='Infinix Smart 6 Plus' brand='Infinix' price='3,199฿'/>
        <CardForm src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-m53-5g/galaxy-m53-5g-001-500x500.webp" name ='Samsung Galaxy M53 5G ' brand='Samsung' price='13,999฿'/>
    
        
        <div className="mb-6"></div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
