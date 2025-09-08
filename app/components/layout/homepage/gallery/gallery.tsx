import image from './Screen-Shot-2025-01-24-at-5.34.08-PM.png';
import image1 from './Screen-Shot-2025-01-24-at-5.28.16-PM.png';
import image2 from './DSC_2530-1024x683.jpg';
import image3 from './Screen-Shot-2024-07-06-at-4.29.50-PM.png';
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
    <div className="flex items-center justify-center">
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
                  <div className="">
                    <iframe
                      width="760"
                      height="415"
                      src="https://www.youtube.com/embed/lz2bY0fQmEc?si=3Kx_x6_XY0Hefyrz"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className='rounded'
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
  { image, src: 'https://www.youtube.com/embed/lz2bY0fQmEc?si=3Kx_x6_XY0Hefyrz' },
  {
    image: image1,
    src: 'https://www.youtube.com/embed/Km7P8XmSHl8?si=ysEcMwu5e0nCGPKD',
  },
  { image: image2, src: 'https://www.youtube.com/embed/KiS8r-sLyXg?si=53kUG6PzZHDGWW68' },
  {
    image: image3,
    src: 'https://www.youtube.com/embed/AEicFTmZBKQ?si=6xf-XZ77ykxVBAPt',
  },
];
