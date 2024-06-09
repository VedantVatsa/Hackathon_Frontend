import Image from "next/image";
import Slider from "./_components/Slider";
import Category  from "./_components/Category";
import Footer from "./_components/Footer";
import List from "./_components/List";


export default function Home() {
  return (
    <div className="p-10 px-10">
      <Slider/>
      <List/>
      <Category/>
      <Footer/>
    </div>
  );
}
