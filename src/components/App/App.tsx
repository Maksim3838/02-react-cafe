import css from "./App.module.css";
import Cafeinfo from "../CafeInfo/Cafeinfo";
import VoteOptions from "../VoteOptions";
import VoteStats from "../VoteStats";
import Notification from "../Notification";


const jsxMarkup = (
  <div className={css.app}></div>

);

createRoot(document.getElementById("root") as HTMLElement).render(jsxMarkup);
