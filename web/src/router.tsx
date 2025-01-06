import { createBrowserRouter } from "react-router-dom"
import { ListBanks } from "./pages/list-banks"
import { Home } from "./pages/home"
import { SearchBank } from "./pages/search-bank"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/list-banks",
        element: <ListBanks />
    },
    {
        path: "/search-bank",
        element: <SearchBank />
    }
])