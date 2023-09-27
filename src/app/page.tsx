import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Categories from "./sections/Categories";
import Highlight from "./sections/Highlight";
import Latest from "./sections/Latest";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Highlight />
      <Latest />
      <Categories />
      <Footer />
    </main>
  );
}
