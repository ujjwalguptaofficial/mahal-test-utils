export interface IStore {
    getter?;
    mutation?;
    task?;
    state?;

    commit?(mutationName: string, payload?);

    watch?(name: string, cb: () => void);
}