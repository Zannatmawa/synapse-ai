import Image from "next/image";
import Main from "./components/Main";
import NavigationBar from "./components/sections/NavigationBar";
import FooterSection from "./components/sections/Footer";

export default function Home() {
  return (
    <div >
      <NavigationBar />
      <main >
        <Main />
      </main>
      <FooterSection />
    </div>
  );
}
//https://www.cravburgers.shop/
//https://www.produx.design/