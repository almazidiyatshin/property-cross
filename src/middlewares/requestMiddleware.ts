export const requestMiddleware = ({ dispatch, getState }) => (next) => (
  action
) => {
  if (action.request) {
    const request = fetch(`http://localhost:3000${action.request.url}`);

    next(action.request.onStart());

    setTimeout(
      () =>
        request
          .then((res) => res.json())
          .then((data) =>
            next(action.request.onSuccess(data.properties, data.totalResults))
          )
          .catch((error) => next(action.request.onError(error))),
      2000
    );
  } else {
    return typeof action === 'function'
      ? action(dispatch, getState)
      : next(action);
  }
};
