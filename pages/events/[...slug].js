import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import ResultTiile from "../../components/event-detail/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

const FilteredEventsPage = (props) => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <h1 className="center">Loading...</h1>;
  }
  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];
  if (
    isNaN(filteredMonth) ||
    isNaN(filteredYear) ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    filteredYear > 2030 ||
    filteredYear < 2021
  ) {
    return (
      <>
        <ErrorAlert>Invalid filter, Please adjust your values!</ErrorAlert>
        <div class="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for the chosen filter!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }
  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultTiile date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
