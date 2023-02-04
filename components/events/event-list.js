import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          id={event.id}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
