const logger = (store) => (next) => (action) => {
    // console.info('%cINFO:', 'color: yellow', `Dispatching a ${action.type} action with payload:`, action.payload);
    const result = next(action);
    // console.info('%cNext State:','color: cyan', store.getState());
    return result;
  };
  
  export default logger;