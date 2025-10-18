import Titlecontent from '~/components/common/titlecontent';
import image from './12-1024x731.jpeg';
import image1 from './chén-xu-xoa-nước-dường_Tạp-chí-Nông-thôn-Việt-768x512.jpg';
import image2 from './2-2-2-1024x576.webp';
import image3 from './mamcom-692x1024.jpeg';
import image4 from './DJI_0501-Pano-768x370.jpeg';
import SlideContent from '~/components/common/slidecontent';
import ListWithoutImg from '~/components/common/listwithoutimg';
import { useTranslation } from 'react-i18next';
export default function Heritage() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center">
        <div className="w-full">
          <Titlecontent title={'Cultural Heritage'} />
        </div>
        <div className="mb-10 flex justify-between gap-10">
          <div className="w-1/2 space-y-3">
            <img src={image} alt="" className="rounded" />
            <div className="ml-5 space-y-3 border-l-2 border-dashed border-[#dba511] p-3">
              <h2 className="text-2xl font-semibold">
                {t(`Cultural Heritage.The place where national pride takes flight`)}
              </h2>
              <div className="text-sm font-semibold text-[#dba511]">
                02/09/2025 - {t('Cultural Heritage.Local Cultural Events')}
              </div>
              <p className="text-justify">{t('Cultural Heritage.detail')}</p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-between rounded">
            <ListWithoutImg resources={resources} title={'Cultural Heritage'} />
          </div>
        </div>
        <div className="flex w-full justify-between">
          {resourcesSlideContent.map((item, index) => (
            <div key={index} className="flex w-[24%] items-center justify-center">
              <SlideContent
                image={item.image}
                title={item.title}
                date={item.date}
                name={item.title}
                typeTime={item.typeTime}
                section={'Cultural Heritage'}
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
    name: 'The Keeper of the River’s Soul',
    date: '28/08/2025',
    typeTime: 'Local Cultural Events',
  },
  {
    name: 'Back to Trà Lộc Wetland',
    date: '27/08/2025',
    typeTime: 'Local Cultural Events',
  },
  {
    name: 'Hearing the River Tell Its Tales',
    date: '25/08/2025',
    typeTime: 'Local Cultural Events',
  },
  {
    name: 'Journey to the Land of Agarwood to Savor the Taste of Nem"',
    date: '23/08/2025',
    typeTime: 'Local Cultural Events',
  },
  {
    name: 'Hanoi Recognized with Nine More National Intangible Cultural Heritages',
    date: '20/08/2025',
    typeTime: 'Heritage',
  },
];

const resourcesSlideContent = [
  {
    image: image1,
    title: 'Xu Xoa – The Refreshing Sweet Jelly of Central Vietnam',
    date: '20/08/2025',
    typeTime: 'Local Cultural',
  },
  {
    image: image2,
    title: 'Timeless Melodies: The Enduring Vitality of Revolutionary Music',
    date: ' 19/08/2025',
    typeTime: 'Art',
  },
  {
    image: image3,
    title: 'The Meal of Independence',
    date: '17/08/2025',
    typeTime: 'Local Cultural Events',
  },
  {
    image: image4,
    title: 'The Legendary Blue River Region',
    date: '15/08/2025',
    typeTime: 'Local Cultural',
  },
];
