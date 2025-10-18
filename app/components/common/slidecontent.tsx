import slugify from 'slugify';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
type SlideContentProps = {
  image: string;
  title: string;
  date: string;
  name: string;
  typeTime: string;
  section: string;
  horizontal?: boolean;
};
export default function SlideContent({ image, title, date, name, horizontal, typeTime, section }: SlideContentProps) {
  const { t } = useTranslation();
  return (
    <div className={`flex w-full  rounded shadow ${horizontal ? 'flex-row items-center h-[220px]' : 'h-[350px] flex-col gap-5'}`}>
      <div className={` ${horizontal ? 'w-1/3  h-full' : 'h-2/3'}`}>
        <Link
          to={`/chi-tiet-diem-den-du-lich/${slugify(name, { locale: 'vi', lower: true })}`}
          className="h-full w-full"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded border border-white object-cover object-center"
          />
        </Link>
      </div>
      <div className="p-2 flex-1">
        <Link
          to={`/chi-tiet-diem-den-du-lich/${slugify(name, { locale: 'vi', lower: true })}`}
          className="mb-2 line-clamp-2 w-full text-center text-xl font-semibold text-gray-700 hover:text-blue-500 active:text-blue-500"
        >
          {t(`${section}.${title}`)}
        </Link>
        <span className="block text-center text-sm font-semibold text-[#dba51199] uppercase">
          {date} - {t(typeTime)}
        </span>
      </div>
    </div>
  );
}
