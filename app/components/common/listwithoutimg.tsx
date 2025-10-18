import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import slugify from 'slugify';

type ListProps = {
  resources: { name: string; date: string; typeTime: string }[];
  title: string;
};
export default function ListWithoutImg({ resources, title }: ListProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex w-full flex-col justify-between rounded bg-[#be1f1f] p-10">
      {resources.map((item, index) => (
        <div key={index} className="mb-10 flex w-full flex-col gap-5 border-b-2 border-dashed pb-2 last:mb-0">
          <div className="space-y-2">
            <Link
              to={`/chi-tiet-diem-den-du-lich/${slugify(item.name, { locale: `vi`, lower: true })}`}
              className="cursor-pointer text-lg font-semibold text-white uppercase hover:text-white hover:underline"
            >
              {t(`${title}.${item.name}`)}
            </Link>
          </div>
          <div className="text-sm font-semibold text-[#f7cf62] uppercase">
            {item.date} - {t(item.typeTime)}
          </div>
        </div>
      ))}
    </div>
  );
}
