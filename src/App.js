import assets from "./assets";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionWrapper from "./components/SectionWrapper";
import Technologies from "./components/Technologies";

const style = { app: `bg-gradient-to-r from-cyan-500 to-blue-500` };

function App() {
  return (
    <div className={`App ${style.app}`}>
      <Header />
      <SectionWrapper
        name="top"
        title="Buy and sell NFTs on your own marketplace"
        description="Buy, store, collect NFTs, exchange and earn crypto. Join 15+ million people in using the Eneftee marketplace."
        mockupImg={assets.hero1}
        showBtn
      />
      <SectionWrapper
        name="deployment"
        title="Deployment"
        description="Eneftee is deployed using Expo, which runs natively on all users' devices. You can easily get your app into people's hands."
        mockupImg={assets.hero2}
        reverse
      />
      <Technologies />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
