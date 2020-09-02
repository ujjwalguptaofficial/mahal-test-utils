// tslint:disable-next-line
export function Mutation(name: string) {
    return (target, key: string) => {
        target[key] = function (payload) {
            target.$store.commit(name, payload)
        }
    }
};

