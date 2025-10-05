import Titlecontent from '~/components/common/titlecontent';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import { TOURLIST } from '~/data/data';
import { FaStar } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';
import slugify from 'slugify';
import { type CarouselApi } from '~/components/ui/carousel';
import { useEffect, useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
const formatVND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
export const formatPrice = (price?: number) => formatVND.format(price ?? 1_000_000);
import { FaRegDotCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
export default function Travels() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex items-center justify-center pb-10">
      <div className="w-3/4">
        <div>
          <Titlecontent title={'Travel Journey'} />
        </div>
        <div>
          <Carousel opts={{ loop: true }} plugins={[Autoplay({})]} setApi={setApi}>
            <CarouselContent>
              {TOURLIST.map((item, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="my-1 flex items-center justify-center">
                    <div className="flex h-[380px] flex-col justify-between space-y-5 rounded pb-2 shadow">
                      <div className="">
                        <Link
                          to={`/hanh-trinh-cua-chuyen-di/${slugify(item.name, { locale: `${i18n.language}`, lower: true })}`}
                          className=""
                        >
                          <img src={item.image} alt={item.name} className="h-[230px] w-full rounded object-cover" />
                        </Link>
                      </div>
                      <div className="space-y-2 px-1">
                        <Link
                          to={`/hanh-trinh-cua-chuyen-di/${slugify(item.name, { locale: `${i18n.language}`, lower: true })}`}
                          className="line-clamp-2 flex cursor-pointer justify-center text-center text-lg font-medium uppercase hover:text-blue-500 active:text-blue-500"
                        >
                          {t(`Travel Journey.${item.name}`)}
                        </Link>
                        <div className="flex justify-between px-1">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 4 }, (_, index) => {
                              return <FaStar className="text-yellow-400" key={index} />;
                            })}
                            <CiStar />
                          </div>
                          <div className="flex items-center gap-1">
                            {(index + 1) * 1_000}
                            <FaRegUser />
                          </div>
                        </div>
                        <div className="text-center font-medium">
                          Giá: {formatPrice(item.price.child)} - {formatPrice(item.price.default)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-3 flex items-center justify-center gap-1">
              {Array.from({ length: count }, (_, index) =>
                index + 1 === current ? (
                  <FaRegDotCircle key={index} className="cursor-pointer text-xs" />
                ) : (
                  <FaRegCircle
                    key={index}
                    className="cursor-pointer text-xs hover:text-blue-500"
                    onClick={() => api?.scrollTo(index)}
                  />
                ),
              )}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
