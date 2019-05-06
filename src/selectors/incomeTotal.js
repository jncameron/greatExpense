export default income => {
  return income.map(inc => inc.amount).reduce((sum, value) => sum + value, 0);
};
