// import css from "./App.module.css";

// // import VoteOptions from "../VoteOptions";
// // import VoteStats from "../VoteStats";
// // import Notification from "../Notification";


// export default function App ()
//  {return (
//  <div className={css.app}></div>);

//  }

import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <h1 className={css.title}>☕ Sip Happens Café</h1>
        <p className={css.description}>
          Please rate our service by selecting one of the options below.
        </p>

        <div className={css.buttons}>
          <button className={css.button}>Excellent</button>
          <button className={css.button}>Good</button>
          <button className={css.button}>Fair</button>
          <button className={css.button}>Poor</button>
        </div>
      </div>
    </div>
  );
}
