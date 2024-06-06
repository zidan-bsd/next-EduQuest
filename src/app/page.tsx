import Header from "@/components/app/components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
