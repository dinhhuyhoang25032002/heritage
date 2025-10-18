import { useParams } from 'react-router';
import type { Route } from './+types/travelsdetail';
import { TOURLIST } from '~/data/data';
import slugify from 'slugify';
import { formatPrice } from '~/components/layout/travels/travels';
import ListWithImg from '~/components/common/listwithimg';
import { useTranslation } from 'react-i18next';
import Feedback from '~/components/common/feedback';
import { useState, useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Hành trình di chuyển' }, { name: 'description', content: 'About this application' }];
}

export default function TravelsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('schedule');
  const [isLoading, setIsLoading] = useState(true);

  const data = TOURLIST.find(item => slugify(item.name, { locale: `${i18n.language}`, lower: true }) === slug);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"></div>
          <p className="text-lg text-gray-600">Đang tải thông tin hành trình...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Không tìm thấy dữ liệu</h2>
          <p className="mb-6 text-gray-600">Rất tiếc, chúng tôi không thể tìm thấy hành trình bạn đang tìm kiếm.</p>
          <button
            onClick={() => window.history.back()}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div className="h-[500px] w-full overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4">
          <h1 className="animate-gradient-flow mb-4 bg-[linear-gradient(to_right,#FCE653_0%,#FFF_25%,#FFF_50%,#FFF_75%,#FCE653_100%)] bg-[length:200%_auto] bg-clip-text text-center text-4xl font-bold tracking-wide text-transparent uppercase drop-shadow-lg md:text-6xl">
            {t(`${data.name}.name`)}
          </h1>
          {/* <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              📍 {data.location || "Địa điểm"}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              ⏱️ {data.duration || "Thời lượng"}
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              ⭐ {data.rating || "Đánh giá"}
            </span>
          </div> */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="w-full lg:w-8/12">
            {/* Tab Navigation */}
            <div className="sticky top-4 z-10 mb-8 rounded-xl bg-white p-1 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {['schedule', 'price', 'policy', 'notes'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`min-w-[120px] flex-1 rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                      activeTab === tab ? 'bg-[#ffd900] shadow-md' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab === 'schedule' && `📅  ${t(`common.Travel itinerary`)}`}
                    {tab === 'price' && `💰 ${t('common.Ticket Prices & Services')}`}
                    {tab === 'policy' && `📋 ${t('common.Policies & Terms')}`}
                    {tab === 'notes' && `⚠️ ${t('common.Important Notes')}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-300">
              {/* Lịch trình */}
              {activeTab === 'schedule' && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="relative flex h-40 items-center justify-center bg-[#2b446d]">
                    <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                      {t(`common.Travel itinerary`)}
                    </h2>
                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {data.schedules.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="mb-4 flex items-center">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-white shadow-md">
                              {index + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {t('common.Date')} {index + 1}
                            </h3>
                          </div>

                          <div className="ml-4 space-y-4 border-l-2 border-blue-200 pl-6">
                            {item.schedule.map((section, i) => (
                              <div key={i} className="relative">
                                <div className="absolute top-3 -left-8 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-cyan-400 shadow-md"></div>
                                <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                                    {t(`${data.name}.schedules.${index}.schedule.${i}.section`)}
                                  </h4>
                                  <ul className="space-y-3">
                                    {section.time.map((time, j) => (
                                      <li key={j} className="flex items-start">
                                        <span className="mt-1 mr-3 inline-flex min-w-[100px] items-center justify-center rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                                          {time.start} - {time.end}
                                        </span>
                                        <span className="leading-relaxed text-gray-700">
                                          {t(`${data.name}.schedules.${index}.schedule.${i}.time.${j}.details`)}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Giá vé */}
              {activeTab === 'price' && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-r from-emerald-500 to-green-500">
                    <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                      {t('common.Ticket Prices & Services')}
                    </h2>
                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                  <div className="p-6">
                    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50 p-6 shadow-md">
                        <div className="mb-4 flex items-center">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 font-bold text-white shadow-md">
                            👦
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {t('common.Children')} (5-11 {t('common.Age')})
                          </h3>
                        </div>
                        <p className="text-2xl font-bold text-emerald-600">{formatPrice(data.price.child)}</p>
                      </div>

                      <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-md">
                        <div className="mb-4 flex items-center">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-white shadow-md">
                            🧑
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">{t('common.Adult')}</h3>
                        </div>
                        <p className="text-2xl font-bold text-blue-600">{formatPrice(data.price.default)}</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-md">
                      <h3 className="mb-4 flex items-center text-2xl font-bold text-gray-800">
                        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-sm font-bold text-white shadow-md">
                          ⭐
                        </span>
                        {t(`${data.name}.price.extend.title`)}
                      </h3>
                      <ul className="space-y-3">
                        {data.price.extend.content.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mt-1 mr-2 text-amber-500">•</span>
                            <span className="leading-relaxed text-gray-700">
                              {t(`${data.name}.price.extend.content.${idx}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 text-center">
                      <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        Đặt ngay - Ưu đãi hấp dẫn
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Chính sách */}
              {activeTab === 'policy' && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
                    <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                      {t('common.Policies & Terms')}
                    </h2>
                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {data.policy.map((_, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-indigo-50 p-5 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start">
                            <div className="mt-1 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-white shadow-md">
                              {index + 1}
                            </div>
                            <p className="leading-relaxed text-gray-700">{t(`${data.name}.policy.${index}`)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Lưu ý */}
              {activeTab === 'notes' && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="relative flex h-40 items-center justify-center bg-orange-400">
                    <h2 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                      {t('common.Important Notes')}
                    </h2>
                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {data.notes.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 to-red-50 p-5 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start">
                            <div className="mt-1 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white">
                              ⚠️
                            </div>
                            <p className="leading-relaxed text-gray-700">{t(`${data.name}.notes.${index}`)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl mt-10">
              <h3 className="mb-4 flex items-center text-xl font-bold text-gray-800">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-white shadow-md">
                  💬
                </span>
                {t('common.Ratings & Reviews')}
              </h3>
              <Feedback />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full space-y-6 lg:w-4/12">
            <div className="sticky top-24 space-y-6">
              <ListWithImg resources={TOURLIST} title={t('common.Same category')} />

              {/* <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-white shadow-xl">
                <h3 className="mb-3 text-xl font-bold">Cần hỗ trợ?</h3>
                <p className="mb-4 opacity-90">Liên hệ với chúng tôi để được tư vấn chi tiết về hành trình</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="mr-3 rounded-lg bg-white/20 p-2">📞</span>
                    <span>0975186262</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 rounded-lg bg-white/20 p-2">✉️</span>
                    <span>support@travel.com</span>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-white py-3 font-bold text-blue-600 shadow-lg transition-all duration-300 hover:shadow-xl">
                  Liên hệ ngay
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
