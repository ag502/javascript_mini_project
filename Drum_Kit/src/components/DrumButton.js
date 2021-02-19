class DrumButton {
    constructor($target, {key, type}) {
        this.key = key
        this.type = type

        this.$button = document.createElement("div")
        this.$button.classList.add("key")

        this.render()
        $target.appendChild(this.$button)
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