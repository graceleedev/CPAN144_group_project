'use client';
import { useRouter } from 'next/router';
import { restaurants } from '../../data/restaurants';
import ReservationForm from '../../components/ReservationForm.js';
import ReviewList from '../../components/ReviewList';
import styles from '../../styles/Detail.module.css'
import Map from '../../components/Map';

import { TabGroup } from '@/components/TabGroup/TabGroup';
import Tab from '@/components/TabGroup/Tab';
import TabPanel from '@/components/TabGroup/TabPanel';

export default function RestaurantDetail() {
  const { query: { id } } = useRouter();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) return <p>Loading… or Restaurant not found.</p>;

  return (
    <div>
      <img src={restaurant.imageUrl} alt="" className={styles.heroImg}></img>

      {/* <iframe
        src={restaurant.mapUrl}
        width="300"
        height="200"
        style={{ border: 0 }}
      /> */}
      <div className={styles.grid}>
        <div className={styles.detail}>
        <h2 className={styles.title}>{restaurant.name}</h2>
        <p className={styles.p}>Rating: {restaurant.rating} ⭐ ({restaurant.reviews} reviews)</p>
          <TabGroup>
          <Tab index={0}>About</Tab>
          <Tab index={1}>Photos</Tab>
          <Tab index={2}>Reviews</Tab>

          <TabPanel index={0}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</TabPanel>
          <TabPanel index={1}>
            <img src={restaurant.imageUrl} alt="" className={styles.photo}></img>
          </TabPanel>
          <TabPanel index={2}></TabPanel>
        </TabGroup>
          <div className={styles.review}>
            <h2 style={{marginLeft: '40px'}}>Reviews</h2>
            <ReviewList reviews={[  'Giulietta in Toronto offers a consistently "amazing experience" with "outstanding food" and "exceptional service." Diners rave about its "beautifully designed ambiance" and standout dishes like the "grilled octopus" and "lobster risotto."', 'Overall the food was fresh and delicious and the portions were also very good. The fresh pasta in the ragu was made to perfection. Our main critiques are we were seated 20 minutes into our reservation time. We also reserved a counter seat but were placed at the bar. ' ]} />
          </div>
        </div>
        <div className={styles.form}>
          <h3 style={{textAlign: 'center'}}>Make a Reservation</h3>
          <ReservationForm restaurantId={restaurant.id} />
        </div>
        <div className={styles.location}>
          <h3 style={{textAlign: 'center'}}>Location</h3>
          <Map lat={restaurant.latitude} lng={restaurant.longitude} />
        </div>
      </div>
    </div>
  );
}
