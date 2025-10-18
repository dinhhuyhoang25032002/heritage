import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import image1 from './27-768x432.jpg';
import image2 from './HA-NOI-2-1.jpeg';
import image3 from './01k3wtedg6ne0a0ysg2vjps0t4.webp';
import image4 from './w_10-kk-phan-huy-thiep-0986849229-qua-mien-di-san.jpg';
import image5 from '~/data/tourlist/lang-chu-tich-ho-chi-minh-2.jpeg';
import image11 from './hang-ma-do7-1755162761.webp';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import image6 from './dia-diem-chup-anh-dep-o-ha-noi-2.jpg';
import image7 from '~/data/tourlist/lang-chu-tich-ho-chi-minh-2.jpeg';
import image8 from '~/data/touristattractions/den-giong-soc-son-1_1697557755.jpg';
import image9 from '~/data/tourlist/dac-san-ha-noi-0_1684417727.jpg';
import image10 from '~/data/tourlist/447769714_10211828980876355_161737981121724281_n.jpg';
import SlideContent from '~/components/common/slidecontent';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from 'react-i18next';
import { GoSearch } from 'react-icons/go';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

import bg from './images_banner_bg.jpeg';
import { useState } from 'react';
import Searchtour from '~/components/common/searchtour';
import Weather from '../weather/weather';
import { Link } from 'react-router';
export default function Banner() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="relative">
        <div className="absolute top-10 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center gap-10 py-4 text-[#ffe551]">
          {resourcemenu.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger className="flex items-center gap-3 rounded-full bg-black/15 px-4 py-1 text-2xl font-medium uppercase">
                {t(`header.${item}`)}
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          ))}
          {/* <span className="flex items-center gap-3 text-xl font-medium uppercase">
                              <GoDotFill className="text-xs" />
                              podcart
                            </span> */}
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              jump: true,
            }),
          ]}
          className="relative h-fit"
        >
          <CarouselContent>
            {resources.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
              >
                <div className="h-full">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                  <div className="bg-opacity-50 absolute bottom-0 left-0 flex flex-col justify-between gap-10 p-14 px-44 text-white">
                    <span className="rounded-full bg-[#ffd900]/40 px-2 py-1 text-xl font-semibold uppercase">
                      {item.date} - {t(item.typeTime)}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-15 w-fit translate-y-40 cursor-pointer border-none bg-yellow-400 px-4 text-white" />
        </Carousel>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 h-full w-full bg-white/85 object-cover"></div>
        <div className="z-10 flex w-full justify-center gap-3 bg-[#ffd900] py-16">
          {section.map((item, index) => (
            <Link
              to={`#${item.link}`}
              key={index}
              className="cursor-pointer rounded-full bg-white p-2 px-3 text-xl font-medium hover:bg-gray-100 active:bg-gray-100"
            >
              {t(`header.${item.name}`)}
            </Link>
          ))}
          <div className="flex items-center">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="cursor-pointer" asChild>
                <div className="flex h-full items-center gap-2 rounded-full bg-[#0a0264] px-6 text-xl text-white select-none">
                  <GoSearch className="text-xl" /> {t('header.Search')}
                </div>
              </DialogTrigger>
              <DialogContent className="border-none bg-transparent shadow-none" showCloseButton={false}>
                <DialogHeader className="hidden">
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="ov relative max-h-[900px] min-w-[600px] overflow-auto rounded bg-white">
                  <Searchtour onClose={() => setOpen(false)} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="z-10 flex content-baseline items-center justify-center bg-white/30 px-20 py-12">
          <div className="w-[60%] text-justify align-middle tracking-wide text-gray-700 font-stretch-expanded antialiased xl:text-3xl">
            {t('banner.detail')}
          </div>
        </div>
        <div className="z-10 flex w-full items-center justify-center rounded bg-white" id="weather">
          <Weather />
        </div>
        <div className="z-50 flex w-3/4 items-center justify-between gap-5 py-16">
          {resourcesSlideContent.map((item, index) => (
            <div key={index} className="z-20 w-[24%]">
              <SlideContent
                typeTime={item.typeTime}
                image={item.image}
                title={item.title}
                date={item.date}
                name={item.name}
                section="banner"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    image: image1,
    title: 'Cửa ngỗ vươn mình ra biển lớn 2',
    description: 'Cửa ngỗ vươn mình ra biển lớn 2',
    date: '04/08/2025',
    typeTime: 'Domestic',
  },
  {
    image: image2,
    title: 'HG Dông Nam Bộ',
    description: 'HG Dông Nam Bộ',
    date: '31/07/202,5',
    typeTime: 'Domestic',
  },
  {
    image: image3,
    title: 'Hương chè trên dỉnh núi mây 2',
    description: 'Hương chè trên dỉnh núi mây 2',
    date: '04/07/2025',
    typeTime: 'Domestic',
  },
  {
    image: image4,
    title: 'Những mảng màu văn hóa trên dôi bờ sông Hương 2',
    description: 'Những mảng màu văn hóa trên dôi bờ sông Hương 2',
    date: '15/07/2025',
    typeTime: 'Domestic',
  },
  {
    image: image5,
    title: 'Stillness in the city 2',
    description: 'Stillness in the city 2',
    date: '08/07/2025',
    typeTime: 'Domestic',
  },
  {
    image: image6,
    title: 'Trái tim xanh giữa miền dá tai mèo 1',
    description: 'Trái tim xanh giữa miền dá tai mèo 1',
    date: '01/08/2025',
    typeTime: 'Domestic',
  },
  {
    image: image11,
    title: 'Trái tim xanh giữa miền dá tai mèo 1',
    description: 'Trái tim xanh giữa miền dá tai mèo 1',
    date: '01/08/2025',
    typeTime: 'Domestic',
  },
];
const resourcemenu = [
  'Travel Destination',
  'Cultural Heritage',
  'Contemporary Life',
  'Heritage Award',

  // 'Advertising',
  // 'vietnam heritage',
  // 'Select Language',
];
const resourcesSlideContent = [
  {
    title: 'Ho Chi Minh Mausoleum',
    image: image7,
    date: '02/09/2025',
    typeTime: 'Sightseeing',
    name: 'Ho Chi Minh Mausoleum',
  },
  {
    title: 'Giong Temple in Soc Son',
    image: image8,
    date: '06/08/2025',
    typeTime: 'History',
    name: 'Giong Temple',
  },
  {
    title: 'Hanoi’s Signature Cuisine',
    image: image9,
    date: '07/09/2025',
    typeTime: 'Cuisine',
    name: 'Hanoi Old Quarter',
  },
  {
    title: 'Relaxing Retreat at West Lake',
    image: image10,
    date: '07/09/2025',
    typeTime: 'Relaxation',
    name: 'West Lake',
  },
];

export const section = [
  { name: 'Destination', link: 'destinations' },
  { name: 'Itinerary', link: 'journey' },
  { name: 'Retreat', link: 'rest' },
  { name: 'Weather', link: 'weather' },
];
