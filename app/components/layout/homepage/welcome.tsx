import Banner from './banner/banner';

import Focus from './focus/focus';
import Thumbnail from './thumbnail/thumbnail';
import TourList from './tourlist/tourlist';
import Heritage from './heritage/heritage';

import Award from './award/award';
import Gallery from './gallery/gallery';
import Travels from '~/components/layout/travels/travels';
import Hotellist from './hotel/hotellist';
import Restaurant from './restaurant/restaurant';

export function Welcome() {
  return (
    <main className="">
      <Banner />
      <div id="destinations">
        <TourList />
      </div>

      <Thumbnail />
      <div id="journey">
        <Travels />
      </div>

      <Heritage />
      <Hotellist />
      <Restaurant/>
      <Focus />
      <Award />
      <Gallery />
    </main>
  );
}
