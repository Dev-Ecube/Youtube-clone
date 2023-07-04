const vidProfile = [
  {
    profileVideo: "./images/img1.jpg",
    profilePics: "./image/chanel1.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "live",
    time: "12:35",
  },
  {
    profileVideo: "./images/img2.jpg",
    profilePics: "./image/chanel2.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "JavaScript",
    time: "12:35",
  },
  {
    profileVideo: "./images/img6.jpg",
    profilePics: "./image/chanel5.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Python",
    time: "12:35",
  },
  {
    profileVideo: "./images/img1.jpg",
    profilePics: "./image/chanel1.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Science",
    time: "12:35",
  },
  {
    profileVideo: "./images/img2.jpg",
    profilePics: "./image/chanel2.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "CSS",
    time: "12:35",
  },
  {
    profileVideo: "./images/img6.jpg",
    profilePics: "./image/chanel5.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Africa",
    time: "12:35",
  },
  {
    profileVideo: "./images/img1.jpg",
    profilePics: "./image/chanel1.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "live",
    time: "12:35",
  },
  {
    profileVideo: "./images/img2.jpg",
    profilePics: "./image/chanel2.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Music",
    time: "12:35",
  },
  {
    profileVideo: "./images/img6.jpg",
    profilePics: "./image/chanel5.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "News",
    time: "12:35",
  },
  {
    profileVideo: "./images/img1.jpg",
    profilePics: "./image/chanel1.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "ChannelTv",
    time: "12:35",
  },
  {
    profileVideo: "./images/img2.jpg",
    profilePics: "./image/chanel2.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "AriseTv",
    time: "12:35",
  },
  {
    profileVideo: "./images/img6.jpg",
    profilePics: "./image/chanel5.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "live",
    time: "12:35",
  },
  {
    profileVideo: "./images/img1.jpg",
    profilePics: "./image/chanel1.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "DaveGray",
    time: "12:35",
  },
  {
    profileVideo: "./images/img2.jpg",
    profilePics: "./image/chanel2.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Davido",
    time: "12:35",
  },
  {
    profileVideo: "./images/img6.jpg",
    profilePics: "./image/chanel5.jpg",
    title: "FrontEnd Development bootcamp",
    subTitle: "the edesin bootcamp",
    views: "10M views &#8226 1year ago",
    menu: "Mixes",
    time: "12:35",
  },
];

const videoContainerDOM = document.querySelector(".video-content-container");

function displayVideoProfile() {
  vidProfile.forEach((profile) => {
    videoContainerDOM.innerHTML += `
      <div class="video-container">
       <div class="time-position">
         <img src="${profile.profileVideo}" alt="" class="profile-video" />
         <div class="time">${profile.time}</div>
        </div>
        <div class="video-info">
          <img src="${profile.profilePics}" alt="" />
          <div class="profile-info">
            <h4>${profile.title}</h4>
            <p>${profile.subTitle}</p>
            <p>${profile.views}</p>
          </div>
        </div>
      </div>
    `;
  });
}

displayVideoProfile();

const videoMenu = vidProfile
  .map(
    (profile) => `<li class="list-item"><a href="#">${profile.menu}</a></li>`
  )
  .join("");
document.querySelector(".list").innerHTML += videoMenu;
