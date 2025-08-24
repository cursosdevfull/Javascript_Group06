# E-commerce Application

Este proyecto es una aplicación web de e-commerce construida completamente con JavaScript puro (Vanilla JS### 16. **Web Standards y Best P## Características Principales

- 🛒 **Carrito de compras funcional**: Añadir productos y calcular totales
- 📦 **Catálogo de productos**: Visualización dinámica de productos
- 🧩 **Arquitectura de componentes**: Sistema modular y reutilizable
- 📋 **ES6 Modules**: Sistema de módulos nativo para mejor organización del código
- 💰 **Cálculo de precios**: Sistema de cálculo automático de totales
- 🎨 **Interfaz dinámica**: Generación dinámica de elementos de UI
- 🔄 **Estado reactivo**: Actualización automática de la interfaz
- 🔗 **Imports/Exports**: Gestión clara de dependencias entre módulos**
- **ES6+ features**: Uso de características modernas de JavaScript
- **ES6 Modules**: Sistema de módulos nativo del navegador
- **Class fields**: Declaración de propiedades de clase
- **Modern syntax**: Sintaxis moderna y expresiva
- **Performance considerations**: Consideraciones de rendimiento en manipulación DOM
- **Module bundling**: Organización eficiente del código en módulose demuestra conceptos avanzados de programación orientada a objetos, arquitectura de componentes y **ES6 Modules** para una estructura modular y escalable.

## Conocimientos de JavaScript Empleados

### 1. **Programación Orientada a Objetos (OOP)**
- **Clases ES6**: `Component`, `Product`, `ProductItem`, `ProductList`, `ShoppingCart`, `Shop`, `App`, `ElementAttribute`
- **Constructor**: Inicialización de propiedades en cada clase
- **Herencia**: `ProductItem`, `ProductList`, `ShoppingCart` extienden la clase base `Component`
- **Encapsulación**: Propiedades y métodos específicos para cada clase
- **Polimorfismo**: Implementación específica del método `render()` en cada componente

### 2. **Arquitectura de Componentes**
- **Clase base Component**: Patrón de diseño para componentes reutilizables
- **Lifecycle management**: Control de renderizado con parámetro `isRendered`
- **Component composition**: Composición de componentes complejos a partir de componentes simples
- **Modularidad**: Separación clara de responsabilidades entre componentes

### 3. **Manipulación Avanzada del DOM**
- **Creación dinámica de elementos**: `document.createElement()`
- **Selección de elementos**: `document.getElementById()`, `querySelector()`
- **Manipulación de atributos**: `setAttribute()`, `className`
- **Inserción de contenido**: `innerHTML`, `append()`
- **Navegación del DOM**: Búsqueda de elementos hijos específicos

### 4. **Gestión de Eventos**
- **Event binding**: `addEventListener()` para eventos de click
- **Event handling**: Manejo de eventos de botones
- **Context binding**: Uso de `bind(this)` para mantener el contexto de la clase
- **Event delegation**: Gestión eficiente de eventos en elementos dinámicos

### 5. **Estructuras de Datos y Arrays**
- **Array methods**: `forEach()`, `reduce()`, `push()`
- **Spread operator**: `[...this.items]` para clonar arrays
- **Array manipulation**: Gestión de lista de productos y carrito de compras
- **Data modeling**: Estructura de datos para productos y elementos del carrito

### 6. **Patrones de Diseño**
- **Singleton pattern**: Clase `App` con métodos estáticos
- **Factory pattern**: Creación dinámica de elementos del DOM
- **Observer pattern**: Sistema de comunicación entre componentes
- **Component pattern**: Arquitectura basada en componentes reutilizables

### 7. **Funciones y Métodos Avanzados**
- **Static methods**: Métodos estáticos en la clase `App`
- **Method chaining**: Encadenamiento de operaciones DOM
- **Callback functions**: Funciones como parámetros en eventos
- **Higher-order functions**: `reduce()` para cálculos de totales

### 8. **Template Literals y String Interpolation**
- **Template strings**: Uso de backticks para HTML dinámico
- **String interpolation**: `${variable}` para insertar valores dinámicos
- **Multi-line strings**: Creación de templates HTML complejos
- **Dynamic content generation**: Generación de contenido basado en datos

### 9. **Gestión de Estado**
- **State management**: Gestión del estado del carrito de compras
- **Data flow**: Flujo de datos entre componentes
- **State synchronization**: Sincronización del estado entre UI y datos
- **Immutable updates**: Uso de spread operator para actualizaciones inmutables

### 10. **ES6 Modules y Modularidad**
- **Import/Export statements**: Uso de `import` y `export` para modularizar el código
- **Module separation**: Cada clase en su propio archivo/módulo independiente
- **Named exports**: Exportación específica de clases y funciones
- **Module loading**: Carga dinámica de módulos en el navegador
- **Dependency management**: Gestión clara de dependencias entre módulos
- **Code splitting**: Separación del código en módulos lógicos
- **Namespace isolation**: Aislamiento de namespaces entre módulos

### 11. **Modularidad y Organización de Código**
- **Class-based architecture**: Organización del código en clases especializadas
- **Separation of concerns**: Separación clara entre lógica de negocio y presentación
- **Code reusability**: Componentes reutilizables a través de herencia
- **File organization**: Separación entre dependencias y lógica principal

### 11. **Modularidad y Organización de Código**
- **Module-based architecture**: Arquitectura basada en módulos ES6
- **Class-based architecture**: Organización del código en clases especializadas
- **Separation of concerns**: Separación clara entre lógica de negocio y presentación
- **Code reusability**: Componentes reutilizables a través de herencia y módulos
- **File organization**: Un archivo por clase/módulo para mejor mantenimiento
- **Import/Export patterns**: Patrones de importación y exportación entre módulos

### 12. **Comunicación Entre Componentes**
- **Parent-child communication**: Comunicación entre componentes padre e hijo
- **Global state management**: Uso de la clase `App` como gestor global
- **Event-driven architecture**: Arquitectura basada en eventos
- **Loose coupling**: Bajo acoplamiento entre componentes

### 12. **Comunicación Entre Componentes**
- **Parent-child communication**: Comunicación entre componentes padre e hijo
- **Global state management**: Uso de la clase `App` como gestor global
- **Event-driven architecture**: Arquitectura basada en eventos
- **Loose coupling**: Bajo acoplamiento entre componentes mediante módulos
- **Cross-module communication**: Comunicación entre diferentes módulos

### 13. **Programación Funcional**
- **Pure functions**: Funciones sin efectos secundarios
- **Array transformations**: Transformaciones de datos usando métodos de array
- **Functional composition**: Composición de funcionalidades
- **Immutability**: Tratamiento inmutable de los datos

### 13. **Programación Funcional**
- **Pure functions**: Funciones sin efectos secundarios
- **Array transformations**: Transformaciones de datos usando métodos de array
- **Functional composition**: Composición de funcionalidades
- **Immutability**: Tratamiento inmutable de los datos

### 14. **Dynamic HTML Generation**
- **Runtime DOM creation**: Creación de elementos DOM en tiempo de ejecución
- **Conditional rendering**: Renderizado condicional de elementos
- **Data binding**: Vinculación de datos con elementos de la UI
- **Template rendering**: Renderizado de templates con datos dinámicos

### 14. **Dynamic HTML Generation**
- **Runtime DOM creation**: Creación de elementos DOM en tiempo de ejecución
- **Conditional rendering**: Renderizado condicional de elementos
- **Data binding**: Vinculación de datos con elementos de la UI
- **Template rendering**: Renderizado de templates con datos dinámicos

### 15. **Error Handling y Debugging**
- **Console logging**: Uso de `console.log()` para debugging
- **Safe property access**: Verificación de propiedades antes de usarlas
- **Null checking**: Validación de existencia de elementos
- **Defensive programming**: Programación defensiva para evitar errores

### 15. **Error Handling y Debugging**
- **Console logging**: Uso de `console.log()` para debugging
- **Safe property access**: Verificación de propiedades antes de usarlas
- **Null checking**: Validación de existencia de elementos
- **Defensive programming**: Programación defensiva para evitar errores

### 16. **Web Standards y Best Practices**
- **ES6+ features**: Uso de características modernas de JavaScript
- **Class fields**: Declaración de propiedades de clase
- **Modern syntax**: Sintaxis moderna y expresiva
- **Performance considerations**: Consideraciones de rendimiento en manipulación DOM

## Estructura del Proyecto

```
Javascript_Group06/
├── index.html                    # Estructura HTML principal con type="module"
├── assets/
│   ├── scripts/
│   │   ├── app.js               # Módulo principal de la aplicación
│   │   ├── component.js         # Módulo de la clase base Component
│   │   ├── element-attribute.js # Módulo para gestión de atributos
│   │   ├── product.js           # Módulo del modelo Product
│   │   ├── product-item.js      # Módulo del componente ProductItem
│   │   ├── product-list.js      # Módulo del componente ProductList
│   │   ├── shopping-cart.js     # Módulo del componente ShoppingCart
│   │   └── shop.js              # Módulo del componente Shop
│   └── styles/
│       └── app.css              # Estilos CSS
└── README.md                    # Este archivo
```

## Características Principales

- 🛒 **Carrito de compras funcional**: Añadir productos y calcular totales
- 📦 **Catálogo de productos**: Visualización dinámica de productos
- 🧩 **Arquitectura de componentes**: Sistema modular y reutilizable
- � **Cálculo de precios**: Sistema de cálculo automático de totales
- � **Interfaz dinámica**: Generación dinámica de elementos de UI
- 🔄 **Estado reactivo**: Actualización automática de la interfaz

## Componentes Principales

### `Component` (Clase Base)
Clase base que proporciona funcionalidad común para todos los componentes del sistema.

### `Product`
Modelo de datos para representar productos del e-commerce.

### `ProductItem`
Componente individual para mostrar un producto específico.

### `ProductList`
Componente contenedor que gestiona y renderiza la lista de productos.

### `ShoppingCart`
Componente que gestiona el carrito de compras y los cálculos de totales.

### `App`
Clase principal que coordina la comunicación entre componentes.

Este proyecto demuestra el uso práctico de conceptos avanzados de JavaScript en una aplicación web de e-commerce completa y funcional, utilizando únicamente JavaScript puro sin frameworks externos. La implementación con **ES6 Modules** proporciona una arquitectura escalable, mantenible y bien organizada, donde cada componente está claramente separado en su propio módulo con dependencias explícitas.