import { useTranslation } from 'react-i18next';
import ChatWidget from '../chat/chat';
import GoToTop from '~/components/common/gotop';
import logo from '~/components/layout/homepage/header/3.png';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from 'react-icons/fa';
export default function TravelFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent uppercase">
                Memorable Hanoi
              </span> */}
              <img src={logo} alt="" className="size-32 rounded border border-white" />
            </div>
            <p className="leading-relaxed text-gray-300">{t('footer.detail')}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
              {t('footer.Quick link')}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-amber-400">
                  🏠 {t('footer.Home')}
                </Link>
                <Link to="#journey" className="block text-gray-300 hover:text-amber-400">
                  ✈️ {t('header.Itinerary')}
                </Link>
                <Link to="#hotels" className="block text-gray-300 hover:text-amber-400">
                  🏨 {t('footer.Hotel')}
                </Link>
              </div>
              <div className="space-y-2">
                <Link to="#" className="block text-gray-300 hover:text-amber-400">
                  📰 {t('footer.Restaurant')}
                </Link>
                <Link to="#" className="block text-gray-300 hover:text-amber-400">
                  ℹ️ {t('footer.About Us')}
                </Link>
                <Link to="#" className="bg-re flex items-center gap-1 text-gray-300 hover:text-amber-400">
                  <FaMapMarkerAlt className="text-red-500" /> {t('header.Destination')}
                </Link>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
              {t('footer.Popular destination')}
            </h3>
            <div className="space-y-3">
              <Link to="#" className="group flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Hạ Long"
                    className="transition- h-full w-full object-cover duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="font-medium text-white transition-colors duration-300 group-hover:text-amber-400">
                    {t('footer.Ha Long Bay')}
                  </p>
                  <p className="text-sm text-gray-400"> {t('footer.Quang Ninh')}</p>
                </div>
              </Link>
              <Link to="#" className="group flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Hội An"
                    className="transition- h-full w-full object-cover duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="font-medium text-white transition-colors duration-300 group-hover:text-amber-400">
                    {t('footer.Hoi An ancient town')}
                  </p>
                  <p className="text-sm text-gray-400"> {t('footer.Quang Nam')}</p>
                </div>
              </Link>
              <Link to="#" className="group flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <img
                    alt="Sapa"
                    src="https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1740370327.jpg&w=3840&q=75"
                    className="transition- h-full w-full object-cover duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="font-medium text-white transition-colors duration-300 group-hover:text-amber-400">
                    Sapa
                  </p>
                  <p className="text-sm text-gray-400"> {t('footer.Lao Cai')}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
              {t('footer.Contact & Newsletter')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Hotline</p>
                  <p className="font-medium text-white">0975186262</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex min-h-8 min-w-8 items-center justify-center rounded-full bg-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-medium text-white">memorablehanoi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300"> {t('footer.Address')}</p>
                  <p className="font-medium text-white">
                    {' '}
                    {t('footer.Ha Noi')} {t('footer.Viet Nam')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 TravelVN. {t('footer.Rights')}.</div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="#" className="text-gray-400 transition-colors duration-300 hover:text-amber-400">
                {t('footer.Rights')}
              </Link>
              <Link to="#" className="text-gray-400 transition-colors duration-300 hover:text-amber-400">
                {t('footer.Cookie Policy')}
              </Link>
              <Link to="#" className="text-gray-400 transition-colors duration-300 hover:text-amber-400">
                {t('footer.Terms of Use')}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400"> {t('footer.Payment Methods')}:</span>
              <div className="flex space-x-2">
                <div className="flex h-5 w-8 items-center justify-center rounded bg-white text-xs font-bold">VISA</div>
                <div className="flex h-5 w-8 items-center justify-center rounded bg-yellow-400 text-xs font-bold">
                  MC
                </div>
                <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600 text-xs text-white">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <ChatWidget />
      <GoToTop />
    </footer>
  );
}

const section = [
  {
    name: 'Home Page',
  },
];
