export function setInputValue(el, value) {
    el.value = value;
    el.dispatchEvent(new window.Event("input"))
}