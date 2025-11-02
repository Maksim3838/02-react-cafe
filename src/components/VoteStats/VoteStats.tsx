import type { Votes } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
}

 function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positivePercentage = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.stats}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
export default VoteStats;