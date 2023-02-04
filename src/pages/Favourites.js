import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favouriteCtx = useContext(FavouritesContext);
  let content = null;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. 0000</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;