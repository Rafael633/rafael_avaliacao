import FetchProducts from "../components/FetchProducts";
import FetchNews from "../components/FetchNews";
import FetchInicio from "../components/FetchInicio";
import { TelaHome } from "../telas/TelaHome";

const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} = require("react-router-dom");
const { PageLayout } = require("../components/PageLayout");

const ErrorComp = () => {
  return <div>Erro</div>;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorComp />}>
      <Route path="/" element={<TelaHome />}></Route>
      <Route index path="/inicio" element={<FetchInicio />}></Route>
      <Route path="/produtos" element={<FetchProducts />}></Route>
      <Route path="/noticias" element={<FetchNews />}></Route>
    </Route>
  )
);

export const RootNavigation = () => {
  return <RouterProvider router={route} />;
};
