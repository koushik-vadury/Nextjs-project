import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find a lots of great events that allow you to evolve"
        />
      </Head>
      <NewsletterRegistration />
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
