export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = feature => {
    console.log('action creator called')
    return {
         type: ADD_FEATURE, 
         payload: { 
             additionalPrice: feature.price, 
             newFeature: feature, 
            }, 
        }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = id => {
    console.log('action creator called')
    return {
        type: REMOVE_FEATURE,
        payload: {
            additionalPrice: id.price,
            selectedfeature: id,
        },
    }
}