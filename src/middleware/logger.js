const logger = store => next => action => {
  console.log("Dispatched action", action);
};

export default logger;
