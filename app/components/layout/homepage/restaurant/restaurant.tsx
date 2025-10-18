import img1 from './ha-noi-s-traditional.jpg';
import img2 from './great-banh-mi.jpg';
import img3 from './great-vietnamese-food.jpg';
import img4 from './a-momment-of-our-customer.jpg';
import img5 from './best-view-to-the-st-joseph.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';

import img6 from './our-combo-3-2-x-sliders.jpg';
import { FaCircle } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
export default function Restaurant() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center gap-10 py-10">
        <h2 className="z-10 w-full text-3xl font-semibold uppercase text-[#d1a000]">famous restaurant </h2>
        <div className="">
          <Carousel opts={{ align: 'start' }}>
            <CarouselContent>
              {resource.map((item, index) => (
                <CarouselItem key={index} className="flex basis-1/4 flex-col justify-center space-y-5">
                  <div className="flex h-[600px] flex-col justify-between rounded-lg bg-gray-100 pb-5">
                    <div className="flex w-full items-start">
                      <img src={item.image} alt={item.name} className="h-[350px] w-full rounded object-cover" />
                    </div>
                    <h2 className=" text-center text-lg font-semibold">{item.name}</h2>
                    <div className="flex w-full flex-col space-y-3 px-3">
                      <div className="flex w-full gap-1">
                        {item.star}
                        {Array.from({ length: +item.star }, (_, index) => (
                          <div className="flex items-center gap-1" key={index}>
                            <FaCircle className="text-[#0a0264]" />
                          </div>
                        ))}
                      </div>
                      <p className="font-light">{item.description} </p>
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
    name: 'Hanoi Corner Restaurant',
    star: 5,
    description:
      "It was some of the best spring rolls and beef pho that I've had during my trip. Absolutely Fantastic!",
  },
  {
    image: img2,
    name: 'Vietnamese Cuisine & Vegan Food',
    star: 5,
    description: 'Great service and delicious food, loved the duck spring rolls. 2nd visit in 2 weeks',
  },
  {
    image: img3,
    name: "Hong Hoai's Restaurant",
    star: 5,
    description:
      'Excellent food, best pork spring rolls and chicken curry I’ve eaten anywhere. Yummiest Vietnamese Duck Pancakes!',
  },
  {
    image: img4,
    name: 'Quan Que Restaurant',
    star: 5,
    description: 'Excellent food, Vietnamese pancakes are the best. Great place for pancakes',
  },
  {
    image: img5,
    name: 'Ding Doong Restaurant',
    star: 5,
    description: 'Central location, great place to stay.... fresh fruit, pho, huge selection of...',
  },
  {
    image: img6,
    name: 'Milano Coffee Hà Nội',
    star: 5,
    description:
      'A very big thank you to Mango and all the staff at this fabulous restaurant. I love the spring rolls and the buncha',
  },
];
