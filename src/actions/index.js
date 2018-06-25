import api from '../api';

export function fetchImages(userId = null) {
  let actionName, actionNameSuccess, actionNameError;
  if (userId) {
    actionName = 'FETCH_USER_IMAGES';
    actionNameSuccess = 'FETCH_USER_IMAGES_SUCCESS';
    actionNameError = 'FETCH_USER_IMAGES_ERROR';
  } else {
    actionName = 'FETCH_IMAGES';
    actionNameSuccess = 'FETCH_IMAGES_SUCCESS';
    actionNameError = 'ADD_IMAGE_ERROR';
  }

  return dispatch => {
    // let Redux know we're ready to make a network request
    dispatch({ type: actionName });

    api.fetchImages(userId)
      .then(images => {
        // let Redux know the network request has been successful and send along returned data
        dispatch({
          type: actionNameSuccess,
          images
        });
      })
      .catch(error => {
        dispatch({
          type: actionNameError,
          error
        });
      });
  }
}

export function addImage(data = null) {
  return dispatch => {
    // let Redux know we're ready to make a network request
    dispatch({ type: 'ADD_IMAGE' });

    api.addImage()
      .then(imageSrc => {
        dispatch({
          type: 'ADD_IMAGE_SUCCESS',
          imageSrc
        });
      })
      .catch(error => {
        dispatch({
          type: 'ADD_IMAGE_ERROR',
          error
        });
      });
  }
}