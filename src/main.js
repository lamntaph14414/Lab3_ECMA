import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import CTDT from "./pages/ctdt";
// import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/ctdt": () => print(CTDT),
    "/news": () => print(NewsPage),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/ctdt": () => print(Dashboard),

});
router.resolve();