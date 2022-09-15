import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Products } from "./pages/Products";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
