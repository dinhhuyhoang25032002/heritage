import Slider from 'react-slick';
import image1 from './Cửa-ngõ-vươn-mình-ra-biển-lớn-2.jpg';
import image2 from './HG-Dông-Nam-Bộ.jpg';
import image3 from './Hương-chè-trên-dỉnh-núi-mây-2.jpg';
import image4 from './Những-mảng-màu-văn-hóa-trên-dôi-bờ-sông-Hương-2.jpg';
import image5 from './Stillness-in-the-city-2.jpg';
import image6 from './Trái-tim-xanh-giữa-miền-dá-tai-mèo-1.jpg';
import image7 from './anh-1-1-768x512.jpeg';
import image8 from './20250517N-768x370.jpg';
import { useRef } from 'react';
import image9 from './Sac-nau-tren-thiet-ke-cua-cac-nha-mot-Ferragamo-Hermes-The-Row-768x432.png';
import image10 from './27-768x432.jpg';
import SlideContent from '~/components/common/slidecontent';
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};
export default function Banner() {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div>
      <Slider {...settings} ref={sliderRef} className="">
        {resources.map((item, index) => (
          <div
            key={index}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[550px]"
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="bg-opacity-50 absolute right-0 bottom-0 left-0 flex flex-col justify-between gap-10 p-14 px-44 text-white">
              <span className="text-xl font-semibold">{item.date}</span>
              <div className="flex w-full justify-end">
                <button
                  className="w-fit cursor-pointer rounded px-2 py-1 uppercase hover:bg-amber-50/10"
                  onClick={next}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="31"
                    viewBox="0 0 29 31"
                    fill="none"
                    className="svg replaced-svg"
                  >
                    <path d="M1 5L28 5" stroke="white" stroke-miterlimit="10"></path>
                    <path d="M23 9L28 5L23 1" stroke="white" stroke-miterlimit="10" stroke-linejoin="bevel"></path>
                    <path
                      d="M5.34 16.02V21.56L1.68 16.02H0.77V23H1.68V17.45L5.34 23H6.25V16.02H5.34ZM12.5513 16.02H8.80125V23H12.5513V22.25H9.71125V19.85H12.2513V19.1H9.71125V16.77H12.5513V16.02ZM18.8882 23H19.9182L17.7782 19.52L19.9282 16.03H18.9082L17.3082 18.76L15.6282 16.03H14.6082L16.7482 19.52L14.6182 23H15.6282L17.2182 20.28L18.8882 23ZM21.7091 16.77H23.6191V23H24.5291V16.77H26.4291V16.03H21.7091V16.77Z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="-mt-14 flex items-center justify-center gap-6 bg-yellow-50/10 pb-4">
        {resourcesSlideContent.map((item, index) => (
          <div key={index} className="z-50 w-1/5">
            <SlideContent image={item.image} title={item.title} date={item.date} />
          </div>
        ))}
      </div>
    </div>
  );
}

const resources = [
  {
    image: image1,
    title: 'Cửa ngỗ vươn mình ra biển lớn 2',
    description: 'Cửa ngỗ vươn mình ra biển lớn 2',
    date: '04/08/2025 - QUỐC NỘI',
  },
  {
    image: image2,
    title: 'HG Dông Nam Bộ',
    description: 'HG Dông Nam Bộ',
    date: '31/07/2025 - QUỐC NỘI',
  },
  {
    image: image3,
    title: 'Hương chè trên dỉnh núi mây 2',
    description: 'Hương chè trên dỉnh núi mây 2',
    date: '04/07/2025 - QUỐC NỘI',
  },
  {
    image: image4,
    title: 'Những mảng màu văn hóa trên dôi bờ sông Hương 2',
    description: 'Những mảng màu văn hóa trên dôi bờ sông Hương 2',
    date: '15/07/2025 - QUỐC NỘI',
  },
  {
    image: image5,
    title: 'Stillness in the city 2',
    description: 'Stillness in the city 2',
    date: '08/07/2025 - QUỐC NỘI',
  },
  {
    image: image6,
    title: 'Trái tim xanh giữa miền dá tai mèo 1',
    description: 'Trái tim xanh giữa miền dá tai mèo 1',
    date: '01/08/2025 - QUỐC NỘI',
  },
];

const resourcesSlideContent = [
  {
    title: 'Trekking trong vòng tay của núi',
    image: image7,
    date: '08/09/2025 - QUỐC NỘI',
  },
  {
    title: 'Hương lúa Hạc Hải gợi tình quê',
    image: image8,
    date: '08/09/2025 - QUỐC NỘI',
  },
  {
    title: 'Xu hướng thời trang Thu Đông 2025: Sự trở lại của vẻ đẹp cổ điển trong hình hài hiện đại',
    image: image9,
    date: '07/09/2025 - THỜI TRANG',
  },
  {
    title: 'Thời trang ‘sân khấu’ và cú hích xu hướng từ các concert tour',
    image: image10,
    date: '07/09/2025 - THỜI TRANG',
  },
];
