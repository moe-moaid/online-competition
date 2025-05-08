import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <nav className="px-[150px] py-4">
          <Navbar />
        </nav>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
