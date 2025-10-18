import { Link } from 'react-router';
import logo from './3.png';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { PiFlowerLotusLight } from 'react-icons/pi';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Menu from '../menu/menu';
import { useEffect, useState } from 'react';
import ScrollProgressBar from '~/components/common/sidebar';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollCurrent = document.documentElement.scrollTop;
      if (scrollCurrent > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="pt-2">
      <div className="flex items-center justify-between px-10 pb-1">
        <div className="relative flex h-[75px] w-[25%] flex-col items-center justify-center">
          <Link to={'/'} className="top-0 flex cursor-pointer flex-col">
            <img
              src={logo}
              alt="logo"
              className="object-cente border absolute top-0 -bottom-8 z-20 size-36 -translate-x-1/2 rounded border-white object-contain"
            />
            {/* <span className="text-center text-lg font-semibold tracking-normal text-[#D32F2F] md:tracking-widest">
              AI/IoT as a service
            </span> */}
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Select defaultValue={'EN'} onValueChange={value => i18n.changeLanguage(value)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={t('Select Language')} />
              </SelectTrigger>
              <SelectContent className="border-none outline-none">
                {language.map((item, index) => (
                  <SelectItem key={index} value={item.value} className="uppercase">
                    {item.title} - {item.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-1 items-center justify-between">
              <Link to="/dashboard" className="text-3xl text-blue-600">
                <FaFacebook />
              </Link>
              <Link to="/dashboard" className="mx-2 rounded-full text-4xl text-red-600">
                <FaYoutube />
              </Link>
              <Link to="/dashboard" className="text-3xl text-pink-500">
                <FaSquareInstagram />
              </Link>
              <Menu />
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/dashboard"
              className="mt-2 flex w-fit items-center gap-2 rounded border-2 border-transparent bg-[#dba511] px-5 py-2 text-sm text-white uppercase hover:border-2 hover:border-[#dba511] hover:bg-white hover:text-[#dba511]"
            >
              <HiOutlineSpeakerphone className="" />
              {t('Advertising')}
            </Link>
            <Link
              to="/dashboard"
              className="mt-2 flex w-fit items-center gap-2 rounded border-2 border-transparent bg-[#0a0264] px-4 py-2 text-sm text-white uppercase hover:border-2 hover:border-[#0a0264] hover:bg-white hover:text-[#dba511]"
            >
              <PiFlowerLotusLight /> vietnam heritage
            </Link>
          </div>
        </div>
      </div>
      <div className={`border-1 bg-white ${scrolled ? 'fixed top-0 left-0 z-50 w-full' : ''}`}>
        <ScrollProgressBar />
      </div>
    </header>
  );
};
const language = [
  {
    title: 'English',
    value: 'EN',
  },
  {
    title: 'Tiếng Việt',
    value: 'VI',
  },
];
