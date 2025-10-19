import { useTranslation } from 'react-i18next';
import type { Route } from './+types/detailtouristattractions';
import { useParams } from 'react-router';
import slugify from 'slugify';
import List from '~/components/common/listwithimg';
import { TOURISTATTRACTIONS } from '~/data/data';
import Feedback from '~/components/common/feedback';

export function meta({ params }: Route.MetaArgs) {
  const title = 'Thông Tin Chi Tiết Về Điểm Đến';
  return [{ title }, { name: 'description', content: `Viewing post ${params.slug ?? ''}` }];
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const data = TOURISTATTRACTIONS.find(
    item => slugify(item.name, { locale: `${i18n.language}`, lower: true }) === slug,
  );

  return (
    <main className="bg-gray-50">
      {data ? (
        <div>
          {/* Banner */}
          <div className="relative">
            <img src={data.image} alt={data.name} className="h-[500px] w-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/30">
              <h1 className="animate-gradient-flow bg-[linear-gradient(to_right,#FCE653_0%,#FFFF_25%,#FFFF_50%,#FFFF_75%,#FCE653_100%)] bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent uppercase drop-shadow-lg">
                {t(`${data.name}.name`)}
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto flex gap-14 px-20 py-12">
            {/* Left Content */}
            <div className="flex w-2/3 flex-col space-y-10">
              <div className="flex flex-col space-y-10">
                {/* Địa chỉ + bản đồ */}
                <div className="grid h-fit grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-amber-300 bg-amber-100 p-5">
                    <h2 className="mb-3 text-xl font-semibold uppercase">📍 {t('common.address')}</h2>
                    <p className="text-justify text-lg leading-relaxed tracking-wide">{t(`${data.name}.location`)}</p>
                  </div>
                  <iframe
                    src={data.map}
                    // height="300"
                    allowFullScreen
                    className="min-h-[300px] w-full flex-1 rounded-xl border border-cyan-400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Mô tả chi tiết */}
                <div className="space-y-8">
                  {data.description.map((item, index) => (
                    <div key={index} className="space-y-4 rounded-xl">
                      {item.title && (
                        <h3 className="text-2xl font-semibold text-amber-700">
                          {t(`${data.name}.description.${index}.title`)}
                        </h3>
                      )}
                      <ul className="space-y-2">
                        {item.content.map((c, idx) => (
                          <li key={idx} className="text-justify text-lg leading-relaxed tracking-wide">
                            {t(`${data.name}.description.${index}.content.${idx}`)}
                          </li>
                        ))}
                      </ul>
                      {item.image && (
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className="h-[550px] w-[80%] rounded-lg border object-cover shadow"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Hoạt động */}
                {data.activities && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-semibold text-cyan-700">🎯 {t('common.activities')}</h3>
                    {data.activities.map((item, index) => (
                      <div key={index} className="space-y-4 rounded-xl">
                        {item.title && (
                          <h2 className="text-2xl font-semibold text-amber-700">
                            {t(`${data.name}.activities.${index}.title`)}
                          </h2>
                        )}
                        <ul className="space-y-2">
                          {item.content.map((c, idx) => (
                            <li key={idx} className="text-justify text-lg leading-relaxed tracking-wide">
                              {t(`${data.name}.activities.${index}.content.${idx}`)}
                            </li>
                          ))}
                        </ul>
                        {item.image && (
                          <div className="flex justify-center">
                            <img
                              src={item.image}
                              alt=""
                              className="h-[550px] w-[80%] rounded-lg border object-cover shadow"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-10 w-full">
                <Feedback />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-1/3 space-y-8">
              <div className="rounded-xl p-2">
                <h2 className="my-5 mb-4 text-xl font-semibold text-gray-800 uppercase">
                  🔗{t('common.Same category')}
                </h2>
                <List resources={TOURISTATTRACTIONS} />
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <p className="p-20 text-center text-xl">Không tìm thấy điểm đến</p>
      )}
    </main>
  );
}
