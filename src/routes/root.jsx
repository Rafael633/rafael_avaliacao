import FetchProducts from "../components/FetchProducts";
import FetchNews from "../components/FetchNews";
import FetchInicial from "../components/FetchInicial";

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
      <Route index path="/inicio" element={<FetchInicial />}></Route>
      <Route path="/produtos" element={<FetchProducts />}></Route>
      <Route path="/noticias" element={<FetchNews />}></Route>
    </Route>
  )
);

export const RootNavigation = () => {
  return <RouterProvider router={route} />;
};
