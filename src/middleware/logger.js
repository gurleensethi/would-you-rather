const logger = ({ getState }) => next => action => {
  console.log("Dispatched action", action);
  console.log("Current State", getState());
  const result = next(action);
  console.log("Next State", getState());
  return result;
};

export default logger;
