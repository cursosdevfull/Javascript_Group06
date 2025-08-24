# Conversor de Temperatura Avanzado

Este proyecto es una aplicación web interactiva para convertir temperaturas entre Celsius y Fahrenheit, que incluye características avanzadas como reconocimiento de voz, visualización de gráficos y efectos de sonido.

## Conocimientos de JavaScript Empleados

### 1. **Programación Orientada a Objetos (OOP)**
- **Clases ES6**: `TemperatureConvert`, `AdvancedTemperatureConvert`, `SimpleChart`
- **Constructor**: Inicialización de propiedades y configuración inicial
- **Herencia**: `AdvancedTemperatureConvert` extiende `TemperatureConvert` usando `extends` y `super()`
- **Encapsulación**: Métodos privados y propiedades de instancia

### 2. **Manipulación del DOM**
- **Selección de elementos**: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`
- **Creación dinámica**: `document.createElement()`
- **Manipulación de atributos**: `dataset`, `className`, `innerHTML`
- **Navegación del DOM**: Acceso a propiedades y métodos de elementos

### 3. **Gestión de Eventos**
- **Event Listeners**: `addEventListener()` para múltiples tipos de eventos
- **Eventos de teclado**: Manejo de `keypress` y detección de tecla Enter
- **Eventos de input**: Manejo de cambios en campos de texto
- **Eventos de click**: Interacciones con botones y elementos
- **Eventos de reconocimiento de voz**: `onresult`, `onend`, `onerror`

### 4. **APIs Web Modernas**
- **Web Speech API**: `SpeechRecognition` para reconocimiento de voz
- **Web Audio API**: `AudioContext`, `OscillatorNode`, `GainNode` para efectos de sonido
- **Canvas API**: `getContext('2d')` para renderizado de gráficos

### 5. **Programación Asíncrona**
- **setTimeout()**: Temporizadores para retrasos y timeouts
- **Callback functions**: Funciones como parámetros en eventos y temporizadores

### 6. **Estructuras de Datos**
- **Arrays**: Almacenamiento y manipulación de datos de ciudades
- **Objetos**: Configuraciones (`Config`), constantes (`Constants`) y datos estructurados
- **Array methods**: `forEach()`, `map()`, `from()`, `match()`

### 7. **Funciones Avanzadas**
- **Arrow functions**: Sintaxis moderna `() => {}`
- **Template literals**: Strings con interpolación usando backticks
- **Destructuring**: Extracción de propiedades de objetos

### 8. **Validación y Manejo de Errores**
- **Validación de entrada**: Verificación de rangos de temperatura
- **Manejo de NaN**: `isNaN()` para validar números
- **Control de flujo**: Estructuras condicionales para validación

### 9. **Matemáticas y Cálculos**
- **Conversiones matemáticas**: Fórmulas de Celsius a Fahrenheit y viceversa
- **Math object**: `Math.abs()`, `Math.min()`, `Math.max()`, `Math.PI`
- **Cálculos de precisión**: `toFixed()` para formateo de decimales

### 10. **Funcionalidades del Canvas**
- **Renderizado 2D**: Dibujo de líneas, puntos, grillas y ejes
- **Transformaciones**: `scale()`, `translate()`, `rotate()`
- **Estilos de dibujo**: `strokeStyle`, `fillStyle`, `lineWidth`
- **Gestión de píxeles**: `devicePixelRatio` para pantallas de alta resolución

### 11. **Regular Expressions (RegEx)**
- **Patrones de búsqueda**: `/(\d+(?:\.\d+)?)/g` para extraer números del texto de voz
- **Métodos de string**: `match()` para encontrar coincidencias

### 12. **Gestión de Estado**
- **Propiedades de instancia**: `isConverting`, `currentTemperature`, `soundEnabled`
- **Control de banderas**: Prevención de conversiones múltiples simultáneas

### 13. **Interactividad Avanzada**
- **Scroll programático**: `scrollIntoView()` para navegación suave
- **Destacado dinámico**: Resaltado de ciudades basado en temperatura
- **Toggle de funcionalidades**: Activar/desactivar sonidos

### 14. **Optimización y Performance**
- **Event delegation**: Gestión eficiente de eventos
- **Debouncing**: Control de frecuencia de conversiones
- **Lazy loading**: Inicialización bajo demanda de características

### 15. **Patrones de Diseño**
- **Module pattern**: Organización de código en módulos cohesivos
- **Observer pattern**: Sistema de eventos y callbacks
- **Factory pattern**: Creación dinámica de elementos del DOM

## Estructura del Proyecto

```
Javascript_Group06/
├── index.html          # Estructura HTML principal
├── assets/
│   ├── scripts/
│   │   └── app.js       # Lógica principal de la aplicación
│   └── styles/
│       └── styles.css   # Estilos CSS
└── README.md           # Este archivo
```

## Características Principales

- 🌡️ Conversión bidireccional Celsius ↔ Fahrenheit
- 🎤 Reconocimiento de voz para entrada de datos
- 📊 Visualización gráfica de conversiones
- 🔊 Efectos de sonido interactivos
- 🌍 Referencia de temperaturas de ciudades mundiales
- 📱 Interfaz responsive y moderna

Este proyecto demuestra el uso práctico de conceptos avanzados de JavaScript en una aplicación web completa y funcional.