import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const Home = (props) => {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
};
