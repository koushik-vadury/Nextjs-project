export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-event-project-79078-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export const getFeaturedEvents = async () => {
  const AllEvents = await getAllEvents();
  return AllEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
  const AllEvents = await getAllEvents();
  return AllEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter) => {
  const AllEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = AllEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
