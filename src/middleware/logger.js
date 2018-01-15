
export default store => next => action => {
    console.log('Logger:', action);

    const result = next(action);

    console.log('next state:', store.getState());

    return result;
}

// same as:
//
// export default function(store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }