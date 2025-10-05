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
    <div className={`flex w-full rounded shadow ${horizontal ? 'flex-row items-center' : 'flex-col'}`}>
      <div className="">
        <Link
          to={`/chi-tiet-diem-den-du-lich/${slugify(name, { locale: 'vi', lower: true })}`}
          className=" line-clamp-3 text-justify text-xl font-semibold text-gray-700"
        >
          <img
            src={image}
            alt={title}
            className="h-[265px] w-full rounded border border-white object-cover object-center"
          />
        </Link>
      </div>
      <div className="p-2">
        <Link
          to={`/chi-tiet-diem-den-du-lich/${slugify(name, { locale: 'vi', lower: true })}`}
          className="mb-2 line-clamp-3 w-full text-center text-xl font-semibold text-gray-700 hover:text-blue-500 active:text-blue-500"
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
