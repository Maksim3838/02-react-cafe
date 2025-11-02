import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
}

 function VoteOptions({ onVote, onReset }: VoteOptionsProps) {
  return (
    <div className={css.buttons}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      <button className={css.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
export default VoteOptions;