import Header from "../Header/Header";

import verified from "../../assets/images/youtube-verified.svg";
import like from "../../assets/images/vw-like.png";
import dislike from "../../assets/images/vw-dislike.png";
import share from "../../assets/images/vw-share.png";
import download from "../../assets/images/vw-download.png";
import threedots from "../../assets/images/vw-threedots.png";
import { VIDEOSDATA } from "../../data/videosData";
import { useParams } from "react-router-dom";

const VideoWatch = () => {
  const { videoId } = useParams();
  const video = VIDEOSDATA.find((v) => v.id == videoId);
  console.log(video);
  return (
    <div className="video-watch">
      <Header />
      <div className="vw-main-content">
        {
          <div key={video.id} className="vw-main-content-left">
            <iframe
              className="vw-video"
              // width="1000"
              // height="500"
              src={video.src}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="vw-video-name">{video.name}</h2>
            <div className="vw-like-subs-account-line">
              <img
                className="vw-avatar-image"
                src={video.producerAvatar}
                alt=""
              />
              <div className="account-name-subs">
                <p>
                  {video.producer} <img src={verified} alt="" />
                </p>
                <span>17.7M subscribers</span>
              </div>
              <button className="vw-subscribe-btn">Subscribe</button>
              <div className="like-dislike-btns">
                <button className="vw-like">
                  <img src={like} alt="" />
                  {video.overallLikes}
                </button>
                <button className="vw-dislike">
                  <img src={dislike} alt="" />
                </button>
              </div>
              <button className="vw-share">
                <img src={share} alt="" />
                Share
              </button>
              <button className="vw-download">
                <img src={download} alt="" />
                Download
              </button>
              <button className="vw-threedots">
                <img src={threedots} alt="" />
              </button>
            </div>
            <div className="vw-video-info">
              <span>
                <b>{video.view}views</b> <b>{video.whenReleased}</b>
              </span>
              <p>{video.bio}</p>
            </div>
            <div className="vw-comments">
              <p className="total-comments-vw">12 comments</p>
              <div className="comment-profile">
                <div className="comment-profile-avatar">
                  <img
                    src="https://gcl.sa/wp-content/uploads/2021/02/team-1.jpg"
                    alt=""
                  />
                </div>
                <div className="comment-profile-comment">
                  <div>
                    <b>@someJohnDoe </b>
                    <span>3 years ago</span>
                  </div>
                  <p>
                    I went from a 6 to an 11. The changes are intense. I didn’t
                    know a battery could last this long
                  </p>
                  <div className="comments-like-dislike">
                    <button>
                      <img src={like} alt="" />
                      28K
                    </button>
                    <button>
                      <img src={dislike} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-profile">
                <div className="comment-profile-avatar">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="comment-profile-comment">
                  <div>
                    <b>@JaneDoe </b>
                    <span>3 weeks ago</span>
                  </div>
                  <p>
                    Why can’t there be more reviewers like you? You make things
                    easy to understand for those of us who are technologically
                    less informed and provide clarity rather than ego.
                  </p>
                  <div className="comments-like-dislike">
                    <button>
                      <img src={like} alt="" />
                      407
                    </button>
                    <button>
                      <img src={dislike} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-profile">
                <div className="comment-profile-avatar">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                    alt=""
                  />
                </div>
                <div className="comment-profile-comment">
                  <div>
                    <b>@randomPerson </b>
                    <span>2 months ago</span>
                  </div>
                  <p>
                    i just upgraded from a 7 to an 11 a few days ago and there
                    is a HUGE improvement in performance and battery usage.
                  </p>
                  <div className="comments-like-dislike">
                    <button>
                      <img src={like} alt="" />
                      1.1K
                    </button>
                    <button>
                      <img src={dislike} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="comment-profile">
                <div className="comment-profile-avatar">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqX9rryutsQ0NtOn2qN5ESJfu4SbBmHL3Fiw&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="comment-profile-comment">
                  <div>
                    <b>@techGuy1247 </b>
                    <span>4 years ago</span>
                  </div>
                  <p>
                    For anyone who’s deciding factor is the screen I promise you
                    I was the same way but having the 11 I can barely notice a
                    difference between the upscaled 720 compared to 1080. You
                    can still select 1080 which is a good idea cause it’ll then
                    use up the maximum resolution of the phone. Apple has made
                    this LCD screen amazingly.
                  </p>
                  <div className="comments-like-dislike">
                    <button>
                      <img src={like} alt="" />
                      55
                    </button>
                    <button>
                      <img src={dislike} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="vw-main-content-right">
          {VIDEOSDATA.map((el, i) => {
            return (
              <div key={i} className="vw-main-content-right-cards">
                <div className="img-vwr">
                  <img src={el.videoThumbnail} alt="" />
                  <span>{el.videoDuration}</span>
                </div>
                <div className="vwr-infos">
                  <h4>{el.name}</h4>
                  <span>
                    {el.producer} <img src={verified} alt="" />
                  </span>
                  <p>
                    {el.view} • {el.whenReleased}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoWatch;


