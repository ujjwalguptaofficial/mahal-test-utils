export function Getter(name: string) {
    return (target, key: string) => {
        if (!target._$storeGetters) {
            target._$storeGetters = [];
        }
        target._$storeGetters.push({
            prop: key,
            state: name
        });
    }
}