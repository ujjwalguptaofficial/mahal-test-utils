export function setInputValue(el, value) {
    const propForHTMLElement = (() => {
        switch ((el as HTMLElement).getAttribute('type')) {
            case 'checkbox':
                return 'checked';
            default:
                return 'value';
        }
    })();
    el[propForHTMLElement] = value;
    el.dispatchEvent(new window.Event("input"))
}