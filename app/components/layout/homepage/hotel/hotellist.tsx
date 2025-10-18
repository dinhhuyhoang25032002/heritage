import img1 from './delicacy-hotel-spa.jpg';
import img2 from './gm-premium-hotel.jpg';
import img3 from './solaria-hotel.jpg';
import img4 from './swimming-pool.jpg';
import img5 from './hanoi-la-siesta-hotel.jpg';
import bg from './sofitel-legend-metropole.jpg';
import { FaCircle } from 'react-icons/fa';
import img6 from './lovely-deco.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import { Button } from '~/components/ui/button';
export default function Hotellist() {
  return (
    <div className="relative flex items-center justify-center">
      <div>
        <img src={bg} alt="" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 h-full w-full bg-gray-800/75"></div>
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center gap-10 py-10">
        <h2 className="z-10 w-full text-3xl font-semibold text-white uppercase">famous hotel</h2>
        <div className="">
          <Carousel opts={{ align: 'start' }}>
            <CarouselContent>
              {resource.map((item, index) => (
                <CarouselItem key={index} className="flex basis-1/4 flex-col justify-center space-y-5">
                  <div className="rounded-lg bg-white pb-5">
                    <div className="w-full">
                      <img src={item.image} alt={item.name} className="w-full rounded" />
                    </div>
                    <h2 className="my-5 text-center text-lg font-semibold">{item.name}</h2>
                    <div className="flex w-full flex-col space-y-3 px-3">
                      <div className="flex w-full gap-1">
                        {item.star}
                        {Array.from({ length: +item.star }, (_, index) => (
                          <div className="flex items-center gap-1" key={index}>
                            <FaCircle className="text-[#0a0264]" />
                          </div>
                        ))}
                      </div>
                      <span className="font-semibold">From ${item.money} </span>
                      <Button className="rounded-full bg-[#0a0264]">Check availability</Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

const resource = [
  {
    image: img1,
    name: 'La Sinfonía Citadel Hotel And Spa',
    star: '5',
    money: 81,
  },
  {
    image: img2,
    name: 'GM Premium Hotel',
    star: 5,
    money: 110,
  },
  {
    image: img3,
    name: 'Solaria Hotel',
    star: 5,
    money: 81,
  },
  {
    image: img4,
    name: 'Meritel Hanoi',
    star: 5,
    money: 108,
  },
  {
    image: img5,
    name: 'La Siesta Classic Ma May Hotel',
    star: 5,
    money: 77,
  },
  {
    image: img6,
    name: 'Bendecir Hotel & Spa',
    star: 5,
    money: 124,
  },
];
