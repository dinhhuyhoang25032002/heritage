import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import slugify from 'slugify';
import type { SightseeingTour, TouristAttractions } from '~/data/type';
type ListProps = {
  resources: TouristAttractions[] | SightseeingTour[];
  title?: string;
};
export default function ListWithImg({ resources, title }: ListProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex w-full flex-col justify-between rounded bg-[#f7cf62] p-10">
      <h1 className="mb-5 text-center text-2xl font-semibold text-blue-500 uppercase">{title}</h1>
      {resources.map((item, index) => (
        <div key={index} className="mb-10 flex w-full gap-5 border-b-2 border-dashed pb-5">
          {item.image && (
            <div className="w-1/3 rounded border border-white">
              <img src={item.image} alt={item.name} className="h-full w-full rounded object-cover object-center" />
            </div>
          )}

          <div className="w-2/3 space-y-2">
            <Link
              to={`/chi-tiet-diem-den-du-lich/${slugify(item.name, { locale: `${i18n.language}`, lower: true })}`}
              className="line-clamp-1 cursor-pointer text-lg font-semibold uppercase hover:text-white hover:underline"
            >
              {item.name}
            </Link>
            <p className="line-clamp-3 tracking-wide">{t(`${item.name}.introduction`)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
