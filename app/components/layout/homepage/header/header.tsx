import { Link } from 'react-router';
import logo from './logo_heritage_2025.jpg';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { PiFlowerLotusLight } from 'react-icons/pi';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { GoDotFill } from 'react-icons/go';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { GoSearch } from 'react-icons/go';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Menu from '../menu/menu';

export const Header = () => {
  return (
    <header className="pt-2">
      <div className="flex justify-between px-10 pb-1">
        <img src={logo} alt="logo" className="w-[216px] object-cover" />
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Dialog>
                <DialogTrigger className="cursor-pointer">
                  <GoSearch className="text-2xl text-yellow-600" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account and remove your data from
                      our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <Select defaultValue="light">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Chọn ngôn ngữ" />
              </SelectTrigger>
              <SelectContent className="border-none outline-none">
                <SelectItem value="light">Tiếng Việt</SelectItem>
                <SelectItem value="dark">English</SelectItem>
                <SelectItem value="system">System</SelectItem>
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
              quảng cáo
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
      <div className="flex justify-center gap-10 border-1 py-4">
        <span className="text-xl font-medium uppercase">AIRLINES</span>
        {resource.map((item, index) => (
          <Tooltip key={index} >
            <TooltipTrigger className="flex items-center gap-3 text-xl font-medium uppercase">
              <GoDotFill className="text-xs" />
              {item.name}
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <span className="flex items-center gap-3 text-xl font-medium uppercase">
          <GoDotFill className="text-xs" />
          podcart
        </span>
      </div>
    </header>
  );
};

const resource = [
  { name: 'Du lịch - Điểm đến', href: '#' },
  { name: 'Di sản văn hóa', href: '#' },
  { name: 'Cuộc sống đương đại', href: '#' },
  { name: 'Giải thưởng heritage', href: '#' },
];
