import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainVideos from "../components/MainVideos/MainVideos";

const HomePage = () => {
  return (
    <section className="home-page-section">
      {/* hps stands for home page section*/}

      <div className="hps-wrapper">
        <div className="hsp-top">
          <Header />
        </div>
        <div className="hsp-main-wrapper">
          <Sidebar />
          <MainVideos />
        </div>
      </div>
      
    </section>
  );
};

export default HomePage;
