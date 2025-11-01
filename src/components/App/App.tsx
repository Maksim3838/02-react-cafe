
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <h1 className={css.title}>☕ Sip Happens Café</h1>
        <p className={css.description}>
          Please rate our service by selecting one of the options below.
        </p>

               <CafeInfo />

        <div className={css.buttons}>
          <button className={css.button}>Good</button>
          <button className={css.button}>Neutral</button>
          <button className={css.button}>Bad</button>
          <button className={css.button}>Reset</button>
        </div>
      </div>
    </div>
  );
}
