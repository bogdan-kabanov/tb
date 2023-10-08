import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/swiper-bundle.css';
import { Mousewheel, Pagination } from "swiper/modules";
import './Main.scss'
import Form from '../../Form/Form';
import Label from '../../UI/Label/Label';
import Button from '../../UI/Button/Button';
import SwiperProps from 'swiper';
import Paragraph from '../../UI/Paragraph/Paragraph';
import Headline from '../../UI/Headline/Headline';
import { useRef, useEffect, useState } from 'react';

import FsLightbox from "fslightbox-react";

import doc1 from '../../../assets/licenziya_img_one.png'
import doc2 from '../../../assets/licenziya_img_waifu2x_art_scan_noise1.png'

function Main() {
    const [toggler, setToggler] = useState(false);
    const [slide, setSlide] = useState(0);

    const handleImageClick = (index: number) => {
        setSlide(index);
        setToggler(!toggler);
    };

    function slideChange(swiper: SwiperProps) {
        const numSlide: number = swiper.realIndex;
        if (numSlide === 1) {
            swiper.pagination.bullets.forEach((bullet) => {
                bullet.classList.remove('pagination-dark');
                bullet.classList.add('pagination-light');
            });
        } else {
            swiper.pagination.bullets.forEach((bullet) => {
                bullet.classList.add('pagination-dark');
                bullet.classList.remove('pagination-light');
            });
        }
    }

    const swiperRef = useRef<SwiperProps | null>(null);

    function smoothScrollTo(y: number): Promise<void> {
        return new Promise<void>(resolve => {
            const maxScrollSpeed = 35;
            const scrollInterval = setInterval(() => {
                const distance = y - window.scrollY;
                const scrollSpeed = Math.min(Math.abs(distance), maxScrollSpeed);
                window.scrollBy(0, Math.sign(distance) * scrollSpeed);
                if (Math.abs(distance) <= maxScrollSpeed) {
                    clearInterval(scrollInterval);
                    animation = true
                    resolve();
                }
            }, 1000 / 60);
        });
    }

    let animation: boolean = true

    useEffect(() => {
        const swiper = swiperRef.current;
        if (window.scrollY == 0) {
            document.body.style.overflow = 'hidden'
        }
        const checkScroll = async (event: WheelEvent) => {
            if (swiper) {
                const swiperRect = swiper.el.getBoundingClientRect();
                const lastSlideRect = swiper.slides[swiper.slides.length - 1].getBoundingClientRect()

                if (swiperRect.top <= 0 && swiperRect.bottom >= window.innerHeight) {
                    document.body.style.overflow = 'hidden';
                    swiper.mousewheel.enable();
                }

                if (animation && lastSlideRect.top <= swiperRect.top && window.scrollY <= window.innerHeight && event.deltaY > 0) {
                    animation = false
                    swiper.mousewheel.disable();
                    smoothScrollTo(window.innerHeight + 1)
                    document.body.style.overflow = 'auto';
                }

                if (animation && window.scrollY <= window.innerHeight + 1 && event.deltaY < 0) {
                    animation = false
                    swiper.mousewheel.enable();
                    document.body.style.overflow = 'hidden'
                    smoothScrollTo(0)
                }

                window.scrollY
            }
        };

        window.addEventListener('wheel', checkScroll);
        return () => window.removeEventListener('wheel', checkScroll);
    }, []);

    return (
        <div className="Main" >
            <div className="element"></div>
            <div className="swiper-container">
                <Swiper
                    centeredSlidesBounds={true}
                    onSlideChange={slideChange}
                    centeredSlides={true}
                    slidesPerGroup={1}
                    modules={[Mousewheel, Pagination]}
                    speed={600}
                    className="MainSwiper"
                    direction="vertical"
                    spaceBetween={30}
                    slidesPerView={1}
                    resizeObserver={true}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    pagination={{
                        clickable: true,
                        renderBullet: function (_index, className) {
                            return `<span class="${className} pagination-dark"></span>`;
                        }
                    }}
                >
                    <SwiperSlide className="SlideWrapper ContactFormSlide">
                        <Form addClass="MainForm">
                            <Headline>Связаться с нами</Headline>
                            <div className='FormRow'>
                                <div>
                                    <Label htmlFor='InputFirstName' labelText='Имя:' placeholder='Иван' id='InputFirstName' />
                                </div>
                                <div>
                                    <Label htmlFor='InputFirstName' labelText='Фамилия:' placeholder='Иванов' id='InputLastName' />
                                </div>
                            </div>
                            <Label htmlFor='InputEmail' labelText='Почта:' placeholder='Ваша почта' id='InputEmail' />
                            <Label htmlFor='InputTelephone' labelText='Номер:' placeholder='Ваш номер телефон' id='InputTelephone' />
                            <Button type='submit'>Связаться с нами</Button>
                        </Form>
                    </SwiperSlide>
                    <SwiperSlide className="SlideWrapper AboutWe">
                        <div className="AboutWe_Content">
                            {/* <h3 className='Headline'>О Нас</h3> */}
                            <Headline>О Нас</Headline>
                            <Paragraph>
                                Компания "Технологии Безопасности" занимается установкой систем безопасности и охраны. Мы предлагаем широкий спектр услуг, включая установку пожарной и охранно-пожарной сигнализации, систем дымоудаления, систем оповещения и эвакуации людей при пожаре.
                            </Paragraph>
                            <Paragraph>
                                Мы понимаем, что при возникновении пожара наибольшую опасность для жизни представляет дым. Поэтому мы устанавливаем системы дымоудаления, которые могут локализовать угарный газ, очистить помещение от мелких частиц пыли и пепла. Кроме того, мы предлагаем установку систем видеонаблюдения, речевого оповещения и эвакуации при пожаре, звукового сопровождения, которые могут помочь в быстром и эффективном эвакуировании людей в случае пожара.
                            </Paragraph>
                            <Paragraph>
                                Мы стремимся обеспечить безопасность наших клиентов и помочь им защитить свой бизнес и имущество. Наша команда профессионалов готова предложить индивидуальный подход к каждому клиенту и подобрать наиболее подходящее решение для его потребностей. С нами вы можете быть уверены в надежности и качестве наших услуг
                            </Paragraph>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="SlideWrapper">
                        <div className="ImageDocs">
                            <img
                                src={doc1}
                                alt="Изображение 1"
                                onClick={() => handleImageClick(1)}
                            />
                            <img
                                src={doc2}
                                alt="Изображение 2"
                                onClick={() => handleImageClick(2)}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <FsLightbox
                toggler={toggler}
                sources={[
                    doc1,
                    doc2,
                ]}
                slide={slide}
            />
        </div >
    )
}

export default Main