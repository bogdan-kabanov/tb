import Logotype from "@components/UI/Logotype/Logotype"

import SiteName from "@components/UI/SiteName/SiteName"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './LeftSidebar.scss';

import img from "@assets/project_image/sa-235.jpg"
import logoUrl from "@assets/logotype.svg"

import { Autoplay, Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";
function LeftSidebar() {
    const [header, setHeader] = useState('');

    useEffect(() => {
        const headerText = 'Технологии Безопасности';
        let i = 0;
        const intervalId = setInterval(() => {
            setHeader(headerText.substring(0, i));
            i++;
            if (i > headerText.length) {
                clearInterval(intervalId);
            }
        }, 100);
    }, []);
    
    return (
        <div className="LeftSidebar">
            <div className="LeftSidebar_Logo">
                <Logotype url={logoUrl} alt="logotype" />
                <SiteName sitename={header} />
            </div>
            <h1 className="TitleSite">Ваша безопасность, Наша обязанность</h1>
            <h2 className="SubTitle">При заказе услуг у нас, вы можете быть уверены в безопасности своих объектов, а мы гарантируем качество выполненных работ</h2>

            <div className="SidebarSwiper_Wrapper">
                <span className="SidebarSwiper_Title">Последние объекты</span>
                <Swiper
                    modules={[Mousewheel, Autoplay]}
                    id="first-slider"
                    freeMode={true}
                    className="SidebarSwiper"
                    direction="vertical"
                    spaceBetween={20}
                    slidesOffsetBefore={15}
                    slidesOffsetAfter={30}
                    slidesPerView={1.3}
                    mousewheel={true}
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide className="SlideWrapper">
                        <img className="SlideObject" src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide className="SlideWrapper">
                        <img className="SlideObject" src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide className="SlideWrapper">
                        <img className="SlideObject" src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide className="SlideWrapper">
                        <img className="SlideObject" src={img} alt="img" />
                        <span className="SlideMore">
                            asdsad
                        </span>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default LeftSidebar