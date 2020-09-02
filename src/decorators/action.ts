// tslint:disable-next-line
export function Action(name: string) {
    return (target, key: string) => {
        target[key] = function (payload) {
            target.$store.execute(name, payload)
        }
    }
};