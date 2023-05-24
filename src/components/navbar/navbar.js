import { createRouteContainer } from "../../utilities/routes/createRouteContainer";
import { navbar } from "./navbar-snippets/navbar-snippet";

const navbarElement = createRouteContainer(navbar, "navbar");

export { navbarElement };
