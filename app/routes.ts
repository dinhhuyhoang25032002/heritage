import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('hanh-trinh-cua-chuyen-di/:slug', 'routes/travelsdetail.tsx'),
  route('chi-tiet-diem-den-du-lich/:slug', 'routes/detailtouristattractions.tsx'),
] satisfies RouteConfig;
