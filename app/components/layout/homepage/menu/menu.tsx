import React from 'react';
import { Link } from 'react-router';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';
export default function Menu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer">
        <RxHamburgerMenu className="text-xl" />
      </DrawerTrigger>
      <DrawerContent className="bg-[url(bg_6.png)] bg-contain bg-right bg-no-repeat py-10">
        <DrawerHeader>
          <DrawerTitle className="pl-10 text-xl uppercase">Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1">
          <div className="flex flex-col gap-4 bg-[url(bg_flower.png)] bg-contain bg-right bg-no-repeat p-10 text-lg font-semibold text-gray-700 uppercase">
            {menuItems.map((item, index) => (
              <Link to={''} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <button className="text-lg font-semibold">Đóng</button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const menuItems = [
  { title: 'Trang chủ', link: '/' },
  { title: 'Giới thiệu', link: '/about' },
  { title: 'du lịch điểm đến', link: '/services' },
  { title: 'di sản văn hoá', link: '/services' },
  { title: 'cuộc sống đương đại', link: '/services' },
  { title: 'giải thưởng heritage', link: '/services' },
  { title: 'podcast', link: '/services' },
  { title: 'Tin tức', link: '/news' },
  { title: 'Liên hệ', link: '/contact' },
  { title: 'hợp tác', link: '/services' },
  { title: 'điều khoản - chính sách', link: '/services' },
];
