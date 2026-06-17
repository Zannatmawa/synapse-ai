import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

import Main from "./components/Main";
import NavigationBar from "./components/sections/NavigationBar";
import FooterSection from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#090a0f]">
      <NavigationBar />
      <main >
        <Main />
      </main>
      <FooterSection />
    </div>
  );
}
//git add . && git commit -m "issues solving" && git push
//https://www.cravburgers.shop/
//https://www.produx.design/