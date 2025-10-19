import { RiTempColdLine } from 'react-icons/ri';
import { IoWaterOutline } from 'react-icons/io5';
import Autoplay from 'embla-carousel-autoplay';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import { useTranslation } from 'react-i18next';
export default function Weather() {
  const { t } = useTranslation();
  return (
    <div className="w-3/4 py-10">
      <div className="space-y-5">
        <h2 className="text-4xl font-bold">{t('banner.When to Visit')}</h2>
        <div className="w-full gap-5">
          <Carousel
            opts={{ loop: true, active: true, align: 'start' }}
            plugins={[
              Autoplay({
                jump: false,
              }),
            ]}
            className="h-fit w-full"
          >
            <CarouselContent>
              {resources.map((item, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="flex flex-col space-y-5 rounded-lg border-2 border-gray-400 p-5">
                    <h3 className="text-xl font-medium">{item.month}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center font-medium">
                        <RiTempColdLine className="text-orange-400" /> {item.temperature}&#8457;
                      </div>
                      <div className="flex items-center font-medium">
                        <IoWaterOutline className="text-blue-500" /> {item.nextday}
                      </div>
                      <div className="flex items-center font-medium">
                        <TbRectangleVerticalFilled className="text-green-500" /> {item.status}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    month: 'January',
    status: 'Less busy',
    nextday: '2 days of rain',
    temperature: '62',
  },
  {
    month: 'February',
    status: 'Less busy',
    nextday: '2 days of rain',
    temperature: '65',
  },
  {
    month: 'March',
    status: 'Less busy',
    nextday: '5 days of rain',
    temperature: '69',
  },
  {
    month: 'April',
    status: 'Less busy',
    nextday: '7 days of rain',
    temperature: '76',
  },
  {
    month: 'May',
    status: 'Moderately busy',
    nextday: '12 days of rain',
    temperature: '82',
  },
  {
    month: 'June',
    status: 'Moderately busy',
    nextday: '14 days of rain',
    temperature: '85',
  },
  {
    month: 'July',
    status: 'Moderately busy',
    nextday: '16 days of rain',
    temperature: '85',
  },
  {
    month: 'August',
    status: 'Moderately busy',
    nextday: '17 days of rain',
    temperature: '84',
  },
  {
    month: 'September',
    status: 'Very busy',
    nextday: '13 days of rain',
    temperature: '82',
  },
  {
    month: 'October',
    status: 'Very busy',
    nextday: '8 days of rain',
    temperature: '78',
  },
  {
    month: 'November',
    status: 'Very busy',
    nextday: '4 days of rain',
    temperature: '72',
  },
  {
    month: 'December',
    status: 'Very busy',
    nextday: '2 days of rain',
    temperature: '65',
  },
];
