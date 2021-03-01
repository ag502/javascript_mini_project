class DrumButton {
    constructor($target, {key, type, src}) {
        this.key = key
        this.type = type
        this.audioSrc = src

        this.$button = document.createElement("div")
        this.$button.dataset.key = this.key
        this.$button.classList.add("key")

        document.addEventListener("keydown", this.handleKeyToggle(this.$button))
        document.addEventListener("keyup", this.handleKeyToggle(this.$button))

        $target.appendChild(this.$button)
        this.render()
    }

    handleKeyToggle = (target) => (e) => {
        const {key} = e
        if (key === this.key) {
            target.classList.toggle("playing")

            if (target.classList.contains("playing")) {
                this.$audio.currentTime = 0
                this.$audio.play()
            }
        }
    }

    render = () => {
        const $keyName = document.createElement("kbd")
        $keyName.textContent = this.key

        const $keyType = document.createElement("span")
        $keyType.classList.add("sound")
        $keyType.textContent = this.type

        this.$audio = document.createElement("audio")
        this.$audio.setAttribute("src", this.audioSrc)
        this.$audio.dataset.key = this.key

        this.$button.appendChild($keyName)
        this.$button.appendChild($keyType)
        this.$button.append(this.$audio)
    }
}

export default DrumButton