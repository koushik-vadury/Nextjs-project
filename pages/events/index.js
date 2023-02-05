import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-util";
import EventsSearch from "../../components/event-detail/events-search";
import { useRouter } from "next/router";

const Events = (props) => {
  const router = useRouter();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </>
  );
};
export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default Events;
