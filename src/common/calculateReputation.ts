/**
 * 
 * @param reputation 
 * @returns {number}
 * 
 * Calculates the average of a brewery's reputation list and returns it
 */

export const CalculateReputation = (reputation: number[]) => {
  if (reputation.length <= 1) {
    return reputation[0];
  }

  return reputation.reduce((acc, value) => acc + value, 0) / reputation.length;
};
