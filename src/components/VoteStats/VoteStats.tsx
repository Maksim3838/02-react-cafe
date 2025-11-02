import type { Votes } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.stats}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive feedback: {positiveRate}%</p>
    </div>
  );
}

export default VoteStats;
