import { NavLink } from "react-router-dom"

import headerHamburger from "../../assets/images/youtubemenushower.svg";
import youtubeLogo from "../../assets/images/youtubelogo.svg";
import ytSearchIcon from "../../assets/images/youtube-search-icon.svg";
import youtubeSearchVoice from "../../assets/images/youtubesearchbyvoice.svg";
import youtubeCreateImg from "../../assets/images/youtubecreate.svg";
import youtubeNotifications from "../../assets/images/youtubenotifications.svg";
import youtubeVoiceModalCloser from "../../assets/images/youtube-voice-closer.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <button type="button" className="header-hamburger">
            <img src={headerHamburger} alt="header hamburger" />
          </button>
          <NavLink to="/">
            <img title="YouTube home" src={youtubeLogo} alt="youtube logo" />
          </NavLink>
        </div>

        <div className="header-search">
          
          <input
            type="search"
            placeholder="Search"
            className="youtube-search"
          />
          <span className="youtube-search-indicate" title="Search">
            <img src={ytSearchIcon} alt="youtube-search-indicate" />
          </span>
          <div title="Search with your vocie" className="yt-search-voice">
            <img src={youtubeSearchVoice} alt="search with voice youtube" />

            {/* modal */}

            <div className="yt-search-voice-modal">
              <button type="button" className="yt-search-voice-modal-closer">
                <img
                  src={youtubeVoiceModalCloser}
                  alt="yt-search-voice-modal-closer"
                />
              </button>
              <p>Listening...</p> 
              <div className="yt-search-voice-modal-empty-div"></div>
              <button type="button" className="yt-search-voice-modal-voiceBtn">
                {/* <img src={youtubeSearchVoice} alt="voice search on modal" /> */}
                <svg>
                  <path fill="#fff" d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="header-end">
          <button type="button" title="Search" className="header-search-onresponsive">
            <img src={ytSearchIcon} alt="youtube search icon" />
          </button>
          <button type="button"
            title="Search with your vocie"
            className="yt-search-voice-responsive"
          >
            <img src={youtubeSearchVoice} alt="search with voice youtube" />
          </button>
          <button type="button" title="Create" className="yt-create-btn">
            <img src={youtubeCreateImg} alt="youtube create button" />
          </button>
          <button type="button" title="Notifications" className="yt-notifications-btn">
            <img src={youtubeNotifications} alt="see notifications" />
          </button>
          <button type="button" className="yt-account-show-btn">A</button>
        </div>
      </div>
    </header>
  );
}

export default Header

// supposedly header is over 1 2 3 5 6