import DrumButton from './DrumButton.js'
import keyInfo from "../utils/keyInfo.js";

class Pad {
    constructor($target) {
        this.$pad = document.createElement("div")
        this.$pad.classList.add("keys")

        $target.appendChild(this.$pad)
        this.render()
    }

    render = () => {
        keyInfo.forEach(({key, type, src}, idx) => {
            new DrumButton(this.$pad, {key, type, src})
        })
    }
}

export default Pad