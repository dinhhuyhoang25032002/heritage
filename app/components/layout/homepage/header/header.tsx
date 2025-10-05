import { Link } from 'react-router';
import logo from './logo_heritage_2025.jpg';
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
      <div className="flex justify-between px-10 pb-1">
        <img src={logo} alt="logo" className="w-[216px] object-cover" />
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
              className="mt-2 flex w-fit items-center gap-2 rounded border-2 border-transparent bg-[#005f6e] px-4 py-2 text-sm text-white uppercase hover:border-2 hover:border-[#005f6e] hover:bg-white hover:text-[#dba511]"
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
