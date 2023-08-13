import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import "./hero-slide.scss";
import Button, { OutlineButton } from "../button/Button";
import Modal, { ModalContent } from "../../modal/Modal";

const HeroSlideItem = (props) => {
  let navigate = useNavigate();

  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      props.setVideoSrc(videoSrc);
    } else {
      props.setVideoSrc(null);
    }
    props.setCurrentModal(item.id);
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
        </div>
      </div>
    </div>
  );
};

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [currentModal, setCurrentModal] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const swiperRef = useRef(null);
  const location = useLocation();
  const categoryFromPath = location.pathname.split("/")[1];

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(
          movieType[categoryFromPath],
          {
            params,
          }
        );
        console.log("API Response:", response);
        setMovieItems(response.results.slice(0, 10));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, [categoryFromPath]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (swiperRef.current) {
        const swiperInstance = swiperRef.current.swiper;
        const nextIndex = (swiperInstance.activeIndex + 1) % movieItems.length;
        swiperInstance.slideTo(nextIndex);
      }
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [movieItems]);

  return (
    <div className="hero-slide">
      <Swiper ref={swiperRef} spaceBetween={10} slidesPerView={1}>
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSlideItem
              item={item}
              className={`slide-${i}`}
              setCurrentModal={setCurrentModal}
              setVideoSrc={setVideoSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal
          key={i}
          item={item}
          isOpen={currentModal === item.id}
          videoSrc={videoSrc}
          onClose={() => setCurrentModal(null)}
        />
      ))}
    </div>
  );
};

const TrailerModal = (props) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (props.videoSrc) {
      iframeRef.current.setAttribute("src", props.videoSrc);
    }
  }, [props.videoSrc]);

  return (
    <Modal active={props.isOpen} id={`modal_${props.item.id}`}>
      <ModalContent onClose={props.onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
