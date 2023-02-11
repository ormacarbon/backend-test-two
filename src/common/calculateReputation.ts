export const calculateReputation = (reputation: number[]) =>
  reputation.reduce((acc, value) => acc + value) / reputation.length;
