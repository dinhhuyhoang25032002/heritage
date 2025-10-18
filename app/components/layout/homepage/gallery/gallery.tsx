import image from './Screenshot 2025-10-17 231826.png';
import image1 from './Screenshot 2025-10-17 231853.png';
import image3 from './063.jpeg';
import image2 from './Screenshot 2025-10-17 231910.png';
import Titlecontent from '~/components/common/titlecontent';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { FaPlay } from 'react-icons/fa';
export default function Gallery() {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="w-3/4">
        <div>
          <Titlecontent title={'Gallery'} />
        </div>
        <div>
          {resources.map((item, index) => (
            <div key={index} className="inline-block w-1/4 p-2">
              <Dialog>
                <DialogTrigger className="relative block h-48 w-full cursor-pointer rounded-lg bg-gray-100 shadow-md">
                  <img src={item.image} alt="" className="h-full w-full rounded object-cover" />
                  <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4">
                    <FaPlay className="text-xl" />
                  </div>
                </DialogTrigger>
                <DialogContent className="flex w-[1800px] items-center justify-center border-none bg-transparent shadow-none">
                  <DialogHeader className="hidden">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account and remove your data from
                      our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <iframe
                      width="760"
                      height="415"
                      src={item.src}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const resources = [
  { image, src: 'https://www.youtube.com/embed/wRVmyHY9zwU?si=RzZVPNS5z3IYIdv_' },
  {
    image: image1,
    src: 'https://www.youtube.com/embed/MT8vPndyDa8?si=NUM7ybX4WqWdPBnP',
  },
  { image: image2, src: 'https://www.youtube.com/embed/Vo-Fb-4UGrQ?si=cGQEBbuyPZrg4G2D' },
  {
    image: image3,
    src: 'https://www.tiktok.com/embed/7284942752318508290',
  },
];
