const Config = {
    TEMPERATURE_LIMITS: {
        MIN: -273.15,
        MAX: 1000,
    },
    TIMEOUT: {
        CLOSE_MODAL: 3000,
        CONVERTING_TEMPERATURE: 100,
    },
};

const WORLD_CITIES = [
    { name: 'Madrid, España', celsius: 15, description: 'Capital española' },
    { name: 'Londres, Reino Unido', celsius: 10, description: 'Ciudad británica' },
    { name: 'Nueva York, EE.UU.', celsius: 12, description: 'La Gran Manzana' },
    { name: 'Tokio, Japón', celsius: 16, description: 'Capital japonesa' },
    { name: 'Sydney, Australia', celsius: 18, description: 'Ciudad australiana' },
    { name: 'Moscú, Rusia', celsius: 5, description: 'Capital rusa' },
    { name: 'Dubai, EAU', celsius: 28, description: 'Ciudad del desierto' },
    { name: 'Reykjavik, Islandia', celsius: 2, description: 'Capital nórdica' },
    { name: 'Cairo, Egipto', celsius: 25, description: 'Ciudad del Nilo' },
    { name: 'Río de Janeiro, Brasil', celsius: 24, description: 'Ciudad maravillosa' }
];

class TemperatureConvert {
    constructor() {
        this.chart = null
        this.isConverting = false;

        this.initializeElements();
        this.bindEvents();
        this.initializeCities()
        this.initializeChart()
    }

    initializeElements() {
        this.elements = {
            celsiusInput: document.getElementById("celsiusInput"),
            swapButton: document.getElementById("swapButton"),
            fahrenheitInput: document.getElementById("fahrenheitInput"),
            celsiusIndicator: document.querySelector(".celsius-indicator"),
            fahrenheitIndicator: document.querySelector(".fahrenheit-indicator"),
            errorModal: document.getElementById("errorModal"),
            closeModal: document.getElementById("closeModal"),
            errorMessage: document.getElementById("errorMessage"),
            inputSection: document.querySelector(".input-section"),
            citiesGrid: document.getElementById("citiesGrid"),
            temperatureChart: document.getElementById("temperatureChart")
        };
    }

    bindEvents() {
        this.elements.celsiusInput.addEventListener("input", (e) =>
            this.handleCelsiusInput(e)
        );
        this.elements.fahrenheitInput.addEventListener("input", (e) =>
            this.handleFahrenheitInput(e)
        );

        this.elements.swapButton.addEventListener("click", () =>
            this.swapTemperatures()
        );

        this.elements.closeModal.addEventListener("click", () => this.closeModal());
        this.elements.errorModal.addEventListener("click", (e) => {
            if (e.target === this.elements.errorModal) this.closeModal();
        });
    }

    handleCelsiusInput(e) {
        if (this.isConverting) return;

        const value = parseFloat(e.target.value);

        if (isNaN(value)) {
            this.elements.celsiusIndicator.classList.remove("active");
            return;
        }

        if (!this.validateTemperature(value, "celsius")) {
            this.showError("Temperature off range valid");
            return;
        }

        this.isConverting = true;

        const fahrenheit = this.celsiusToFahrenheit(value);
        this.elements.fahrenheitInput.value = fahrenheit.toFixed(1);

        this.highlightRelevantCities(value)

        setTimeout(() => {
            this.isConverting = false;
        }, Config.TIMEOUT.CONVERTING_TEMPERATURE);
    }

    handleFahrenheitInput(e) {
        if (this.isConverting) return;

        const value = parseFloat(e.target.value);

        if (isNaN(value)) {
            this.elements.fahrenheitIndicator.classList.remove("active");
            return;
        }

        if (!this.validateTemperature(value, "fahrenheit")) {
            this.showError("Temperature off range valid");
            return;
        }

        this.isConverting = true;

        const celsius = this.fahrenheitToCelsius(value);
        this.elements.celsiusInput.value = celsius.toFixed(1);

        this.highlightRelevantCities(celsius)

        setTimeout(() => {
            this.isConverting = false;
        }, Config.TIMEOUT.CONVERTING_TEMPERATURE);
    }

    validateTemperature(value, unit) {
        let celsiusValue = value;

        if (unit === "fahrenheit") {
            celsiusValue = this.fahrenheitToCelsius(value);
        }

        return (
            celsiusValue >= Config.TEMPERATURE_LIMITS.MIN &&
            celsiusValue <= Config.TEMPERATURE_LIMITS.MAX
        );
    }

    swapTemperatures() {
        const celsiusValue = this.elements.celsiusInput.value;
        const fahrenheitValue = this.elements.fahrenheitInput.value;

        this.elements.celsiusInput.value = fahrenheitValue;
        this.elements.fahrenheitInput.value = celsiusValue;

        if (celsiusValue) {
            this.handleCelsiusInput({ target: { value: fahrenheitValue } });
        }
    }

    celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    fahrenheitToCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    showError(message) {
        this.elements.errorMessage.textContent = message;
        this.elements.errorModal.classList.add("show");

        setTimeout(() => {
            this.closeModal();
        }, Config.TIMEOUT.CLOSE_MODAL);
    }

    closeModal() {
        this.elements.errorModal.classList.remove("show");
    }

    initializeCities() {
        this.elements.citiesGrid.innerHTML = "";

        WORLD_CITIES.forEach(city => {
            const cityCard = this.createCityCard(city)
            this.elements.citiesGrid.appendChild(cityCard)
        })
    }

    createCityCard(city) {
        const card = document.createElement("div")
        card.className = "city-card"
        card.dataset.celsius = city.celsius

        const farenheit = this.celsiusToFahrenheit(city.celsius)

        card.innerHTML = `
            <div class="city-name">${city.name}</div>
            <div class="city-temp">${city.celsius}°C / ${farenheit.toFixed(2)}</div>
            <div class='city-description'>${city.description}</>
        `

        card.addEventListener("click", () => {
            this.elements.celsiusInput.value = city.celsius
            this.handleCelsiusInput({ target: { value: city.celsius } })
            this.scrollToConvert()
        })

        return card
    }

    scrollToConvert() {
        document.querySelector(".converter-section").scrollIntoView({
            behaviour: "smooth",
            block: "center"
        })
    }

    highlightRelevantCities(celsius) {
        const cityCards = document.querySelectorAll(".city-card");

        cityCards.forEach(card => {
            const cityCelsius = parseFloat(card.dataset.celsius)
            const delta = Math.abs(celsius - cityCelsius)

            if (delta <= 5) {
                card.classList.add("highlighted")
            } else {
                card.classList.remove("highlighted")
            }
        })
    }

    initializeChart() {
        const ctx = this.elements.temperatureChart.getContext("2d")
        this.chart = new SimpleChart(ctx)
        this.updateChart()
    }

    updateChart() {
        if (!this.chart) return

        const data = this.prepareChartData()
        this.chart.updateData(data)
    }

    prepareChartData() {
        const celsiusRange = Array.from({ length: 21 }, (_, i) => i * 5 - 10)
        const farenheitValues = celsiusRange.map(c => this.celsiusToFahrenheit(c))

        return {
            labels: celsiusRange.map(c => `${c}°C`),
            celsius: celsiusRange,
            farenheit: farenheitValues
        }
    }
}

class AdvancedTemperatureConvert extends TemperatureConvert {
    constructor() {
        super();

        this.soundEnabled = true;

        this.initializeAdvancedFeatures();
    }

    initializeAdvancedFeatures() {
        this.createVoiceRecognition();
        this.createSoundToggle();
    }

    createVoiceRecognition() {
        if (
            !("webkitSpeechRecognition" in window) &&
            !("SpeechRecognition" in window)
        ) {
            return;
        }

        const voiceBtn = document.createElement("button");
        voiceBtn.className = "voice-btn";
        voiceBtn.innerHTML = "<i class='fas fa-microphone'></i>";
        voiceBtn.title = "Dictado por voz";

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = "es-ES";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            this.processVoiceInput(transcript);
        };

        recognition.onend = () => {
            voiceBtn.classList.remove("recording");
        };

        recognition.onerror = (e) => {
            console.error(e);
            voiceBtn.classList.remove("recording");
        };

        voiceBtn.addEventListener("click", () => {
            if (voiceBtn.classList.contains("recording")) {
                recognition.stop();
            } else {
                recognition.start();
                voiceBtn.classList.add("recording");
            }
        });

        this.elements.inputSection.appendChild(voiceBtn);
    }

    processVoiceInput(text) {
        const numberRegEx = /(\d+(?:\.\d+)?)/g;
        const numbers = text.match(numberRegEx);

        if (numbers && numbers.length > 0) {
            const temperature = parseFloat(text);

            if (text.includes("celsius") || text.includes("grado")) {
                this.elements.celsiusInput.value = temperature;
                this.handleCelsiusInput({ target: { value: "temperature" } });
            } else {
                this.elements.celsiusInput.value = temperature;
                this.handleCelsiusInput({ target: { value: temperature } });
            }

            this.playSound("sucess")
        } else {
            this.playSound("error")
        }
    }

    createSoundToggle() {
        const soundToggle = document.createElement("button");
        soundToggle.className = "sound-toggle";
        soundToggle.innerHTML = "<i class='fas fa-volume-up'></i>";
        soundToggle.title = "Activar/Desactivar sonidos";

        soundToggle.addEventListener("click", () => {
            /*             if (this.soundEnabled) {
                                  this.soundEnabled = false
                              } else {
                                  this.soundEnabled = true
                              } */

            // this.soundEnabled = this.soundEnabled ? false : true

            this.soundEnabled = !this.soundEnabled;
            soundToggle.innerHTML = this.soundEnabled
                ? "<i class='fas fa-volume-up'></i>"
                : "<i class='fas fa-volume-mute'></i>";
        });
        document.querySelector(".header .container").appendChild(soundToggle);
    }

    playSound(type) {
        if (!this.soundEnabled) return;

        if (typeof AudioContext !== undefined) {
            const audioContext = new AudioContext()
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain()

            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)

            switch (type) {
                case "conversion":
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
                    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)
                    break;
                case "sucess":
                    oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.1)
                    break;
                case "error":
                    oscillator.frequency.setValueAtTime(300, audioContext.currentTime)
                    break;
            }

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + .2)

            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + .2)
        }
    }
}

class SimpleChart {
    constructor(ctx) {
        this.ctx = ctx
        this.canvas = ctx.canvas
        this.data = null
        this.highlightedPoint = null

        this.setupCanvas()
    }

    setupCanvas() {
        const rect = this.canvas.getBoundingClientRect()
        this.canvas.width = rect.width * window.devicePixelRatio
        this.canvas.height = rect.height * window.devicePixelRatio
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

        this.width = rect.width
        this.height = rect.height
        this.padding = 60
    }

    updateData(data) {
        this.data = data
        this.draw()
    }

    draw() {
        if (!this.data) return;

        this.ctx.clearRect(0, 0, this.width, this.height)

        this.ctx.fillStyle = "#fff"
        this.ctx.fillRect(0, 0, this.width, this.height)

        this.drawGrid()
        this.drawAxes()
        this.drawLine()
        this.drawPoints()

        if (this.highlightedPoint !== null) {
            this.drawHighlightedPoint()
        }
    }

    drawGrid() {
        this.ctx.strokeStyle = "#585858ff"
        this.ctx.lineWidth = 1
        this.ctx.setLineDash([2, 2])

        for (let i = 0; i <= 10; i++) {
            const x = this.padding + (i * (this.width - 2 * this.padding)) / 10
            this.ctx.beginPath()
            this.ctx.moveTo(x, this.padding)
            this.ctx.lineTo(x, this.height - this.padding)
            this.ctx.stroke()
        }

        for (let i = 0; i <= 10; i++) {
            const y = this.padding + (i * (this.height - 2 * this.padding)) / 10
            this.ctx.beginPath()
            this.ctx.moveTo(this.padding, y)
            this.ctx.lineTo(this.width - this.padding, y)
            this.ctx.stroke()
        }

        this.ctx.setLineDash([])
    }

    drawAxes() {
        this.ctx.strokeStyle = "#667eea"
        this.ctx.lineWidth = 2

        this.ctx.beginPath()
        this.ctx.moveTo(this.padding, this.height - this.padding)
        this.ctx.lineTo(this.width - this.padding, this.height - this.padding)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.moveTo(this.padding, this.padding)
        this.ctx.lineTo(this.padding, this.height - this.padding)
        this.ctx.stroke()

        this.ctx.fillStyle = "#2c3e50"
        this.ctx.font = "12px Poppins"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Celsius (°C)", this.width / 2, this.height - 10)

        this.ctx.save()
        this.ctx.translate(20, this.height / 2)
        this.ctx.rotate(-Math.PI / 2)
        this.ctx.fillText("Farenheit (°F)", 0, 0)
        this.ctx.restore()
    }

    drawLine() {
        if (!this.data || this.data.celsius.length < 2) return;

        this.ctx.strokeStyle = "#667eea"
        this.ctx.lineWidth = 2
        this.ctx.beginPath()

        const minC = Math.min(...this.data.celsius)
        const maxC = Math.max(...this.data.celsius)
        const minF = Math.min(...this.data.farenheit)
        const maxF = Math.max(...this.data.farenheit)

        this.data.celsius.forEach((celsius, index) => {
            const farenheit = this.data.farenheit[index]

            const x = this.padding + ((celsius - minC) / (maxC - minC)) * (this.width - 2 * this.padding);
            const y = this.height - this.padding - ((farenheit - minF) / (maxF - minF)) * (this.height - 2 * this.padding)

            if (index === 0) {
                this.ctx.moveTo(x, y)
            } else {
                this.ctx.lineTo(x, y)
            }
        })

        this.ctx.stroke()

    }

    drawPoints() {
        if (!this.data) return;

        const minC = Math.min(...this.data.celsius)
        const maxC = Math.max(...this.data.celsius)
        const minF = Math.min(...this.data.farenheit)
        const maxF = Math.max(...this.data.farenheit)

        this.data.celsius.forEach((celsius, index) => {
            const farenheit = this.data.farenheit[index]

            const x = this.padding + ((celsius - minC) / (maxC - minC)) * (this.width - 2 * this.padding);
            const y = this.height - this.padding - ((farenheit - minF) / (maxF - minF)) * (this.height - 2 * this.padding)

            this.ctx.fillStyle = "#fff"
            this.ctx.strokeStyle = "#667eea"
            this.ctx.lineWidth = 2

            this.ctx.beginPath()
            this.ctx.arc(x, y, 4, 0, 2 * Math.PI)
            this.ctx.fill()
            this.ctx.stroke()
        })
    }

    drawHighlightedPoint() {
        if (!this.data) return;

        const celsius = this.highlightedPoint
        const farenheit = this.celsiusToFahrenheit(celsius)

        const minC = Math.min(...this.data.celsius)
        const maxC = Math.max(...this.data.celsius)
        const minF = Math.min(...this.data.farenheit)
        const maxF = Math.max(...this.data.farenheit)

        const x = this.padding + ((celsius - minC) / (maxC - minC)) * (this.width - 2 * this.padding);
        const y = this.height - this.padding - ((farenheit - minF) / (maxF - minF)) * (this.height - 2 * this.padding)

        this.ctx.fillStyle = "#f093fb"
        this.ctx.strokeStyle = "#764ba2"
        this.ctx.lineWidth = 3

        this.ctx.beginPath()
        this.ctx.arc(x, y, 8, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()

        this.ctx.fillStyle = "#2c3e50"
        this.ctx.font = "bold 12px Poppins"
        this.ctx.fillText(`${celsius}°C`, x, y - 15)
        this.ctx.fillText(`${farenheit}°F`, x, y - 30)
    }

    highlightPoint(celsius) {
        this.highlightedPoint = celsius
        this.draw()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //window.temperatureConvert = new TemperatureConvert()
    window.temperatureConvert = new AdvancedTemperatureConvert();
});
