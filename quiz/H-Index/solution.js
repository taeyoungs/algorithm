function solution(citations) {
  const sortedCitations = citations.sort((a, b) => a - b);

  for (let i = 0; i < sortedCitations.length; i++) {
    if (sortedCitations[i] >= sortedCitations.length - i) {
      return sortedCitations.length - i;
    }
  }

  return 0;
}
