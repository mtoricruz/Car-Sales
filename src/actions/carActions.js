export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = () => {
    console.log('action creator called')
    return { type: ADD_FEATURE }
}