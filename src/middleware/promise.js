
export default store => next => action =>{
    if(!action.payload || !action.payload.then){ {/*check to see if action is a promise, if it's not just continue*/}
        next(action);           {/*passes action to next piece of middleware or to the reducer if no add'l middleware*/}
        return;
    }

    action.payload.then( resp => {  {/*if it is a promise, need to resolve it*/}
        const newAction = {...action, payload: resp}; {/*/keep action the same, but update payload w/ new response*/}

        store.dispatch(newAction);  {/*dispatch drops it back into middleware (loops it back through)*/}
                                    {/*do this b/c action is different and middleware may need to do something*/}
    });

    return action.payload; {/*allows you to utilize .then in rest of app*/}
}