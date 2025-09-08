import { Link } from 'react-router';
import image from '~/components/layout/homepage/banner/Hương-chè-trên-dỉnh-núi-mây-2.jpg';
export default function Thumbnail() {
  return (
    <div className="relative mb-10 w-full">
      <img src={image} alt="" className="" />
      <Link
        to="/dashboard"
        className="absolute -bottom-6 left-1/6 mt-2 flex w-fit items-center gap-2 rounded-full border-2 border-transparent bg-[#dba511] px-5 py-3 text-sm text-white uppercase hover:border-2 hover:border-[#dba511] hover:bg-white hover:text-[#dba511]"
      >
        xem tất cả e-magazine
      </Link>
    </div>
  );
}
