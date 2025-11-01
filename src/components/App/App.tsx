
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
                     <CafeInfo />

        <div className={css.buttons}>
          <button className={css.button}>Good</button>
          <button className={css.button}>Neutral</button>
          <button className={css.button}>Bad</button>
          <button className={css.button}>Reset</button>
        </div>
          </div>
  );
}
