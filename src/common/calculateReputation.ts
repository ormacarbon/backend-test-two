export const CalculateReputation = (reputation: number[]) => {
  if (reputation.length <= 1) {
    return reputation[0];
  }

  return reputation.reduce((acc, value) => acc + value, 0) / reputation.length;
};
