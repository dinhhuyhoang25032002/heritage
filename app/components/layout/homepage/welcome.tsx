import { Header } from './header/header';
import Banner from './banner/banner';
import Focus from './focus/focus';
import Thumbnail from './thumbnail/thumbnail';
import Tourist from './tourist/tourist';
import Heritage from './heritage/heritage';
import Contemporary from './contemporary/contemporary';
import Award from './award/award';
import Gallery from './gallery/gallery';
export function Welcome() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Focus />
      <Thumbnail />
      <Tourist />
      <Heritage />
      <Contemporary />
      <Award />
      <Gallery />
    </main>
  );
}
