import Titlecontent from '~/components/common/titlecontent';
import image from '~/data/tourlist/van-mieu-quoc-tu-giam-1.webp';
import image1 from './Bảo-tàng-Hồ-Chí-Minh-768x432.jpeg';
import image2 from '~/data/touristattractions/long-bien-bridge-thumb.webp';
import image3 from '~/data/touristattractions/pho_co_image.png';
import image4 from '~/data/touristattractions/fa3d073a-chua-thay-9.jpg';
import SlideContent from '~/components/common/slidecontent';
import slugify from 'slugify';
import { Link } from 'react-router';

import ListWithoutImg from '~/components/common/listwithoutimg';
import { useTranslation } from 'react-i18next';
export default function TourList() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="relative py-10 flex justify-between">
          <div className="absolute inset-0 h-full w-full">
            <img src={image} alt="" className="h-full w-full rounded object-cover" />
            <div className="absolute inset-0 h-full w-full bg-gray-900/85"></div>
          </div>
          <div className="z-10 flex w-full flex-row-reverse items-center justify-center gap-10 space-y-3">
            <div className="w-[45%] translate-y-1/4">
              <img src={image} alt="" className="aspect-video rounded hover:scale-[101%]" />
            </div>
            <div className="ml-5 w-[35%] space-y-3 p-3 text-white">
              <Link
                to={`/chi-tiet-diem-den-du-lich/${slugify('Văn Miếu Quốc Tử Giám', { locale: `${i18n.language}`, lower: true })}`}
                className="text-2xl font-semibold"
              >
                {t('Travel Destinations.The Temple of Literature')}
              </Link>
              <div className="mt-1 text-sm font-semibold text-[#dba511] uppercase">
                03/09/2025 - {t('banner.Sightseeing')}
              </div>
              <p className="text-justify">{t('Travel Destinations.detail')}</p>
            </div>
          </div>
          {/* <div>
            <ListWithoutImg resources={resources} title="Travel Destinations" />
          </div> */}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 bg-amber-200 pt-36 pb-16">
          {resourcesSlideContent.map((item, index) => (
            <div key={index} className="mb-5 flex w-[45%] items-center rounded bg-white">
              <div className="flex w-full items-center">
                <SlideContent
                  horizontal={true}
                  section="Travel Destinations"
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  name={item.name}
                  typeTime={item.typeTime}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export const resources = [
  {
    name: 'Vietnam Museum of Ethnology',
    date: '01/09/2025',
    typeTime: 'Domestic',
  },

  {
    name: 'Ho Chi Minh’s Stilt House',
    date: '01/09/2025',
    typeTime: 'Domestic',
  },
  {
    name: 'Vietnam Women’s Museum',
    date: '03/09/2025',
    typeTime: 'Domestic Events',
  },
  {
    name: 'Tay Ho Temple',
    date: '30/08/2025',
    typeTime: 'Domestic Events',
  },
  { name: 'Hoan Kiem Lake', date: '29/08/2025', typeTime: 'Domestic' },
  { name: 'Hoa Lo Prison', date: '01/09/2025', typeTime: 'Domestic' },
];

const resourcesSlideContent = [
  {
    title: 'title0',
    date: '25/08/2025',
    typeTime: 'Domestic Events',
    name: 'Ho Chi Minh Museum',
    image: image1,
  },
  {
    title: 'title1',
    date: '22/08/2025',
    image: image2,
    name: 'Long Bien Bridge',
    typeTime: 'Domestic',
  },
  {
    title: 'title2',
    date: '21/08/2025',
    image: image3,
    name: 'Hanoi Old Quarter',
    typeTime: 'Domestic Events',
  },
  {
    title: 'title3',
    date: '20/08/2025',
    image: image4,
    name: 'Thay Pagoda',
    typeTime: 'Domestic Events',
  },
];
