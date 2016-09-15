import { GET_PHOTOS_REQUEST,GET_PHOTOS_SUCCESS } from '../constants/Page'


export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    switch (year) {
        case 2016:
            setTimeout(() => {
              dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1,2,3,4,5]
              })
            }, 1000)
            break
        case 2015:
            setTimeout(() => {
                  dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: [1,2,3,4]
                  })
                }, 1000)
            break
        case 2014:
            setTimeout(() => {
                  dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: [1,2,3,4,5,6,7]
                  })
                }, 1000)
            break
    }

    
  }

}


