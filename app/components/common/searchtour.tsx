import { FaRegFlag } from 'react-icons/fa';
import { Checkbox } from '~/components/ui/checkbox';
import { RiBowlLine } from 'react-icons/ri';
import { AiOutlineAlert } from 'react-icons/ai';
import { LuNotebookText } from 'react-icons/lu';
import { useState } from 'react';
import type { CheckedState } from '@radix-ui/react-checkbox';
import { TOURISTATTRACTIONS, TOURLIST } from '~/data/data';
import type { SightseeingTour, TouristAttractions } from '~/data/type';
import { Button } from '../ui/button';
import slugify from 'slugify';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
export default function Searchtour({ onClose }: { onClose?: () => void }) {
  const [field, setField] = useState<string>('');
  const [price, setPrice] = useState<{ from: number; to: number } | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [result, setResult] = useState<{ tours: SightseeingTour[]; destinations: TouristAttractions[] } | null>(null);
  const { t, i18n } = useTranslation();
  const handleChoseField = (checked: CheckedState, value: string) => {
    console.log(checked, value);

    if (checked) setField(value);
    else setField('');
  };
  const handleSearch = () => {
    console.log('start exec', !price);

    if (!field) {
      if (price) {
        const tours = TOURLIST.filter(item => {
          const child = item.price?.child ?? 0; // Gán mặc định 0 nếu undefined
          const def = item.price?.default ?? 0; // Gán mặc định 0 nếu undefined
          return child >= price.from && def <= price.to;
        });

        setResult({
          tours: tours,
          destinations: [],
        });
        return;
      }
      setResult(null);
      return;
    } else {
      if (price) {
        const tours = TOURLIST.filter(item => {
          if (item.type !== field) return false;
          const { child = 0, default: def = 0 } = item.price ?? {};
          return child >= price.from && def <= price.to;
        });

        setResult({
          tours: tours,
          destinations: [],
        });
      }
      const tours = TOURLIST.filter(item => item.type === field);
      const destinations = TOURISTATTRACTIONS.filter(item => item.type === field);
      setResult({
        tours: tours,
        destinations: destinations,
      });
      return;
    }
  };
  console.log(result);

  return (
    <div className="space-y-5 p-5">
      <h2 className="text-center text-xl font-medium">Tìm kiếm hành trình, điểm đến phù hợp với bạn!</h2>
      <div className="space-y-1">
        <h2 className="mb-4 font-medium">Lĩnh vực:</h2>
        <div className="flex justify-between rounded bg-[#f7cf62]">
          {Field.map((item, index) => (
            <div className="flex items-center gap-1 rounded p-2" key={index}>
              <Checkbox
                className="bg-white"
                onCheckedChange={checked => handleChoseField(checked, item.value)}
                checked={field === item.value}
              />
              <FaRegFlag />
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="font-medium">{t('common.Price')} (VND):</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap justify-between gap-5">
            {Price.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPrice(prev => ({ ...prev, from: item.from, to: item.to }));
                  setActive(index);
                }}
                className={`w-[30%] cursor-pointer rounded p-2 text-center hover:bg-[#f7cf62] active:bg-[#f7cf62] ${active === index ? 'bg-[#f7cf62]' : 'bg-gray-100'}`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Button className="w-full cursor-pointer rounded bg-[#daa821]" onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </div>
      {result && (
        <div>
          <h2 className="mb-5 font-semibold">Hành trình:</h2>
          {result.tours.length > 0 ? (
            <div className="space-y-4">
              {result.tours.map((item, index) => (
                <div key={index} className="flex gap-1 rounded bg-gray-100 p-2">
                  <div>
                    <img src={item.image} alt={item.name} className="size-20" />
                  </div>
                  <Link
                    onClick={onClose}
                    to={`/hanh-trinh-cua-chuyen-di/${slugify(t(`${item.name}.name`), { locale: `${i18n.language}`, lower: true })}`}
                    className="cursor-pointer text-lg font-semibold uppercase hover:text-blue-500 hover:underline"
                  >
                    {t(`${item.name}.name`)}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">Không tìm thấy kết quả phù hợp.</div>
          )}

          <h2 className="my-5 font-semibold">Điểm đến:</h2>
          {result.destinations.length > 0 ? (
            <div className="space-y-4">
              {result.destinations.map((item, index) => (
                <div key={index} className="flex gap-1 rounded bg-gray-100 p-2">
                  <div>
                    <img src={item.image} alt={item.name} className="size-20" />
                  </div>
                  <Link
                    onClick={onClose}
                    to={`/chi-tiet-diem-den-du-lich/${slugify(t(`${item.name}.name`), { locale: `${i18n.language}`, lower: true })}`}
                    className="cursor-pointer text-lg font-semibold uppercase hover:text-blue-500 hover:underline"
                  >
                    {t(`${item.name}.name`)}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">Không tìm thấy kết quả phù hợp.</div>
          )}
        </div>
      )}
    </div>
  );
}
const Field = [
  {
    content: 'Văn hoá',
    value: 'culture',
  },
  {
    content: 'Ẩm thực',
    value: 'cuisine',
  },
  {
    content: 'Nghỉ dưỡng',
    value: 'rest',
  },
  { content: 'Tâm linh', value: 'spirituality' },
];

const Price = [
  { content: '1 triệu - 2 triệu', from: 1_000_000, to: 2_000_000 },
  {
    from: 2_000_000,
    to: 3_000_000,
    content: '2 triệu - 3 triệu',
  },
  {
    from: 3_000_000,
    to: 5_000_000,
    content: '3 triệu - 5 triệu',
  },
  {
    from: 5_000_000,
    to: 7_000_000,
    content: '5 triệu - 7 triệu',
  },
  {
    from: 7_000_000,
    to: 10_000_000,
    content: '7 triệu - 10 triệu',
  },
  {
    from: 10_000_000,
    to: 15_000_000,
    content: '10 triệu - 15 triệu',
  },
];
