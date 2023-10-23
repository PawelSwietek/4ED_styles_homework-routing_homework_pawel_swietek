import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RickAndMortyLoader from "./Loaders/RickAndMortyLoader.jsx";

import HomeLayout from "./layouts/HomeLayout.jsx";

//Pages
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import RickAndMortyPage from "./pages/RickAndMortyPage.jsx";

//Components
import FetchError from "./components/Errors/FetchError.jsx";
import NotFund from "./components/Errors/NotFund.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='events' element={<EventsPage/>}/>
      <Route path='news' element={<NewsPage/>}/>
      <Route path='rickandmorty' >
        <Route
          index
          element={<RickAndMortyPage/>}
          loader={RickAndMortyLoader}
        />
        <Route
          path=':page'
          element={<RickAndMortyPage/>}
          loader={RickAndMortyLoader}
          errorElement={<FetchError/>}
        />
      </Route>
      <Route path='*' element={<NotFund/>}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}/>
}

export default App
