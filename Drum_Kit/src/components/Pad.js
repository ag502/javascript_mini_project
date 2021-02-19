import DrumButton from './DrumButton.js'
import keyInfo from "../utils/keyInfo.js";

class Pad {
    constructor($target) {
        this.$pad = document.createElement("div")
        this.$pad.classList.add("keys")

        this.render()
        $target.appendChild(this.$pad)
    }

    render = () => {
        keyInfo.forEach(({key, type}, idx) => {
            new DrumButton(this.$pad, {key, type})
        })
    }
}

export default Pad