import { eventsAll } from "@/constants";
import Common from "./Common";

const EventCard = () => {
  return (
    <>
      <Common events={eventsAll} />
    </>
  );
};

export default EventCard;
