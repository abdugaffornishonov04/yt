import MainVideosCategory from "../MainVideosCategory/MainVideosCategory"
import MainVideosVideos from "../mainVideosVideos/MainVideosVideos"

const MainVideos = () => {
  return (
    <div className="main-videos">
      <div className="main-videos-wrapper">
        <MainVideosCategory/>
        <MainVideosVideos/>
      </div>
    </div>
  )
}

export default MainVideos