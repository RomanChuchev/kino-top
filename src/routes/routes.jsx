import HomePage from "../pages/HomePage";
import PersonDetail from "../pages/PersonDetail";
import FavoriteList from "../pages/FavoriteList";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";

export const routesGen = {
  home: "/kino-top/",
  mediaList: (type) => `/kino-top/${type}`,
  mediaDetail: (type, id) => `/kino-top/${type}/${id}`,
  mediaSearch: "/kino-top/search",
  person: (id) => `/kino-top/person/${id}`,
  favoriteList: "/kino-top/favorites",
  reviewList: "/kino-top/reviews",
  passwordUpdate: "password-update",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/kino-top/person/:personId",
    element: <PersonDetail />,
    state: "person.detail",
  },
  {
    path: "/kino-top/search",
    element: <MediaSearch />,
    state: "search",
  },
  {
    path: "/kino-top/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },
  {
    path: "/kino-top/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites",
  },
  {
    path: "/kino-top/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews",
  },
  {
    path: "/kino-top/:mediaType",
    element: <MediaList />,
  },
  {
    path: "/kino-top/:mediaType/:mediaId",
    element: <MediaDetail />,
  },
];

export default routes;
