import { useParams } from 'react-router';
import type { Route } from './+types/travelsdetail';
import { TOURLIST } from '~/data/data';
import slugify from 'slugify';
import { formatPrice } from '~/components/layout/travels/travels';
import image from '~/data/tourlist/ngam-hoang-hon-ho-tay-thuong-thuc-mon-qua-thien-nhien-cuoi-ngay-06-1650338707.jpg';
import image1 from '~/components/layout/travels/1757750550.webp';
import ListWithImg from '~/components/common/listwithimg';
import { useTranslation } from 'react-i18next';
import Feedback from '~/components/common/feedback';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Hành trình di chuyển' }, { name: 'description', content: 'About this application' }];
}
const bgColors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200'];
export default function TravelsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const data = TOURLIST.find(item => slugify(item.name, { locale: `${i18n.language}`, lower: true }) === slug);
  return (
    <div>
      {data ? (
        <div className="">
          {/* Banner */}
          <div className="relative">
            <img src={data.image} alt={data.name} className="h-[500px] w-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <h1 className="animate-gradient-flow bg-[linear-gradient(to_right,#FCE653_0%,#FFF_25%,#FFF_50%,#FFF_75%,#FCE653_100%)] bg-[length:200%_auto] bg-clip-text text-6xl font-bold tracking-wide text-transparent uppercase drop-shadow-lg">
                {t(`${data.name}.name`)}
              </h1>
            </div>
          </div>

          <div className="flex gap-10 px-14 py-10">
            {/* Lịch trình */}
            <div className="flex w-[70%] flex-col">
              <div className="relative z-0 bg-transparent px-6 py-14 lg:px-20">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full rounded object-cover object-center blur-[1px]"
                />
                <h1 className="mb-12 text-center text-3xl font-bold tracking-widest text-gray-800 uppercase drop-shadow">
                  {t(`common.Travel itinerary`)}
                </h1>
                <div className="space-y-4">
                  {data.schedules.map((item, index) => (
                    <div
                      key={index}
                      className="rounded bg-white/90 p-4 shadow-lg transition duration-300 hover:shadow-xl"
                    >
                      <h3 className="mb-4 text-2xl font-semibold text-[#f8c008]">
                        {t('common.Date')} {index + 1}
                      </h3>
                      {item.schedule.map((section, i) => (
                        <div key={i} className="space-y-2 border-t pt-3">
                          <h4 className="text-lg font-medium">
                            {t(`${data.name}.schedules.${index}.schedule.${i}.section`)}
                          </h4>
                          <ul className="list-disc space-y-2 pl-5">
                            {section.time.map((time, j) => (
                              <li key={j} className="leading-relaxed text-gray-700">
                                <span className="font-semibold text-[#f59e0b]">
                                  {time.start} - {time.end}:
                                </span>{' '}
                                {t(`${data.name}.schedules.${index}.schedule.${i}.time.${j}.details`)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Giá vé, chính sách, lưu ý */}
              <div className="relative z-0 bg-transparent px-6 py-14 lg:px-20">
                <img
                  src={image1}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover object-center blur-[1px]"
                />
                <div className="flex flex-col space-y-4">
                  {/* Giá vé */}
                  <div className="rounded bg-white/95 p-6 shadow-lg">
                    <h4 className="mb-4 text-2xl font-semibold text-gray-900">Giá vé</h4>
                    <div className="ml-4 flex flex-col gap-2 text-lg">
                      <span>👦 Trẻ 5-11 tuổi: {formatPrice(data.price.child)}</span>
                      <span>🧑 Người lớn: {formatPrice(data.price.default)}</span>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold">{data.price.extend.title}</h4>
                      <ul className="mt-3 ml-5 list-disc space-y-2 text-gray-700">
                        {data.price.extend.content.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Chính sách */}
                  <div className="rounded bg-white/95 p-6 shadow-lg">
                    <h2 className="mb-4 text-center text-2xl font-bold uppercase">Chính sách</h2>
                    <ul className="ml-5 list-disc space-y-2 text-gray-700">
                      {data.policy.map((item, index) => (
                        <li key={index} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lưu ý */}
                  <div className="rounded bg-white/95 p-6 shadow-lg">
                    <h2 className="mb-4 text-center text-2xl font-bold uppercase">Lưu ý</h2>
                    <ul className="ml-5 list-disc space-y-2 text-gray-700">
                      {data.notes.map((item, index) => (
                        <li key={index} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] space-y-5">
              <ListWithImg resources={TOURLIST} title={t('common.Same category')} />
              <div className="w-full">
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-72 items-center justify-center bg-[#eee] text-center text-xl font-medium">
          Không tìm thấy dữ liệu.
        </div>
      )}
    </div>
  );
}
