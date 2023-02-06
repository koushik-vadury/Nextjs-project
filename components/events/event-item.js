import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

const EventItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.imgcontainer}>
        <Image
          src={"/" + props.image}
          alt={props.title}
          width={240}
          height={160}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>
            {new Date(props.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{props.location.replace(", ", "\n")}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={`/events/${props.id}`}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
