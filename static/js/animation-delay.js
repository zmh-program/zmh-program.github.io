function set_animation_delay(cls, delay_s, bias) {
    const elements = document.getElementsByClassName(cls);
    for (let i = 0,  length = elements.length; i < length; i++) {
        elements[i].style.animationDuration = (delay_s * i + bias) + "s";
    }
}