import { NavLink } from "react-router-dom";

import ytVerified from "../../assets/images/youtube-verified.svg";

import { VIDEOSDATA } from "../../data/videosData";

const MainVideosCard = () => {
   return (
     <>
       {VIDEOSDATA.map((el) => {
         return (
           <NavLink key={el.id} to={`videos/${el.id}`}>
             <div className="main-videos-card">
               <div className="mvc-img-wrapper">
                 <img src={el.videoThumbnail} alt="" />
                 <span>{el.videoDuration}</span>
               </div>
               <div className="mvc-content">
                 <div className="mvc-avatar">
                   <img src={el.producerAvatar} alt="" />
                 </div>
                 <div className="mvc-content-right">
                   <h4>{el.name}</h4>
                   <p className="mvc-verified">
                     {el.producer}
                     <img src={ytVerified} alt="" />
                   </p>
                   <p className="mvc-info">
                     {el.view} views • {el.whenReleased}
                   </p>
                 </div>
               </div>
             </div>
           </NavLink>
         );
       })}
     </>
   );
};

export default MainVideosCard;
