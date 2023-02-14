export const CalculateReputation = (reputation: number[]) =>
  reputation.reduce((acc, value) => acc + value) / reputation.length;
