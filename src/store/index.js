import { useEffect, useState } from "react";

export const createEmitter = () => {
    const subscriptions = new Map();
    return {
      emit: (v) => subscriptions.forEach((fn) => fn(v)),
      subscribe: (fn) => {
        const key = Symbol();
        subscriptions.set(key, fn);
        return () => subscriptions.delete(key);
      },
    };
  };
  
  const createStore = (init) => {
    // create an emitter
    const emitter = createEmitter();
  
    let store = null;
    const get = () => store;
    const set = (op) => (
      (store = op(store)),
      // notify all subscriptions when the store updates
      emitter.emit(store)
    );
    store = init(get, set);
  
    const useStore = () => {
      // intitialize component with latest store
      const [localStore, setLocalStore] = useState(get());
  
      // update our local store when the global
      // store updates.
      //
      // emitter.subscribe returns a cleanup
      // function, so react will clean this
      // up on unmount.
      useEffect(() => emitter.subscribe(setLocalStore), []);
      return localStore;
    };
    return useStore;
  };
  export const useCountStore = createStore((get, set) => ({
    count: 0,
    increment: () => set((store) => ({ ...store, count: store.count + 1 })),
    decrement: () => set((store) => ({ ...store, count: store.count - 1 })),
  }));