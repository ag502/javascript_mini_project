class DrumButton {
    constructor($target, {key, type}) {
        this.key = key
        this.type = type

        this.$button = document.createElement("div")
        this.$button.dataset.key = this.key
        this.$button.classList.add("key")

        document.addEventListener("keydown", this.handleKeyToggle(this.$button))
        document.addEventListener("keyup", this.handleKeyToggle(this.$button))

        $target.appendChild(this.$button)
        this.render()
    }

    handleKeyToggle = (target) => (e) => {
        const {code} = e
        if (code === `Numpad${this.key}`) {
            target.classList.toggle("playing")
        }
    }

    render = () => {
        const $keyName = document.createElement("kbd")
        $keyName.textContent = this.key

        const $keyType = document.createElement("span")
        $keyType.classList.add("sound")
        $keyType.textContent = this.type

        this.$button.appendChild($keyName)
        this.$button.appendChild($keyType)
    }
}

export default DrumButton