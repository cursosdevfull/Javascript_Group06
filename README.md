# Curso de JavaScript - Group06

Este repositorio contiene los materiales y proyectos desarrollados durante el curso de JavaScript. A través de diferentes ramas, se exploran diversos conceptos y aplicaciones de JavaScript desde lo más básico hasta aplicaciones web completas.

## Estructura del Repositorio

El curso está organizado en ramas temáticas, cada una enfocada en diferentes aspectos de JavaScript:

### 1. Fundamentos de JavaScript

#### **[feat/basic-javascript](../../tree/feat/basic-javascript)** - Conceptos Básicos de JavaScript
Esta rama contiene 37 módulos de aprendizaje que cubren todos los fundamentos de JavaScript:

**Módulos incluidos:**
- `01-variables/` - Variables (var, let, const), tipos de datos y scope
- `02-hoisting/` - Comportamiento del hoisting en variables y funciones  
- `03-strict/` - Uso de 'use strict' y sus beneficios
- `04-operador-rest/` - Sintaxis rest (...) y parámetros rest
- `05-funciones/` - Declaración de funciones, expresiones y arrow functions
- `06-bucles/` - Estructuras iterativas (for, while, for...in, for...of)
- `07-funciones-dentro-funciones/` - Closures y scope anidado
- `08-funciones-callback/` - Concepto de callback y programación asíncrona básica
- `09-bind/` - Método bind para contexto de this
- `10-bind-calculadora/` - Aplicación práctica de bind en calculadora
- `11-bind-contexto/` - Manejo de contexto con bind
- `12-window/` - Objeto window y DOM global
- `13-seleccion-elementos/` - Selección de elementos del DOM
- `14-create-elements/` - Creación dinámica de elementos
- `15-clonar/` - Clonado de elementos DOM
- `16-remove-element/` - Eliminación de elementos del DOM
- `17-convert-list/` - Conversión entre tipos de listas
- `18-push-pop-unshift-shift/` - Métodos de arrays para agregar/quitar elementos
- `19-slice/` - Método slice para extraer porciones de arrays
- `20-splice/` - Método splice para modificar arrays
- `21-concat/` - Concatenación de arrays
- `22-indexof/` - Búsqueda de elementos con indexOf
- `23-includes/` - Verificación de existencia con includes
- `24-for-each/` - Iteración con forEach
- `25-map/` - Transformación de arrays con map
- `26-sort/` - Ordenamiento de arrays
- `27-filter/` - Filtrado de arrays
- `28-chain/` - Encadenamiento de métodos
- `30-some-every/` - Métodos some y every para validación
- `31-reduce/` - Reducción de arrays con reduce
- `32-split-join/` - Manipulación de strings con split y join
- `33-declarativo/` - Programación declarativa vs imperativa
- `34-desestructuracion-array/` - Desestructuración de arrays
- `35-operador-spread/` - Operador spread (...)
- `36-objetos/` - Objetos, propiedades y métodos
- `37-clases/` - Clases ES6, constructores y herencia

### 2. Promesas y Asincronía

#### **[feat/promises](../../tree/feat/promises)** - Manejo de Promesas
Esta rama se enfoca en el manejo de operaciones asíncronas con diferentes técnicas:

**Archivos implementados:**
- `app.js` - Promesas básicas con XMLHttpRequest
- `app-fetch.js` - Uso de Fetch API moderna
- `app-axios.js` - Implementación con biblioteca Axios
- `app-axios-secuencial.js` - Ejecución secuencial de promesas
- `app-axios-paralelo.js` - Ejecución paralela de múltiples promesas
- `app-axios-promise-all.js` - Promise.all para manejo conjunto
- `app-axios-promise-all-settled.js` - Promise.allSettled para todas las promesas
- `app-axios-promise-race.js` - Promise.race para la primera promesa resuelta
- `app-axios-async-await.js` - Sintaxis async/await
- `app-axios-async-await-parallel.js` - Async/await con ejecución paralela
- `app-axios-async-await-auto-invoke.js` - Funciones async auto-invocadas

#### **[feat/app-promises](../../tree/feat/app-promises)** - Aplicación con Promesas
Aplicación web completa que demuestra el uso práctico de promesas:

**Características principales:**
- Portal de usuarios con navegación por pestañas
- Gestión de usuarios, posts, albums, fotos, tareas y comentarios
- Arquitectura modular con separación de responsabilidades
- Servicios asíncronos para consumo de APIs
- Interfaz de usuario dinámica con JavaScript puro

**Componentes:**
- `portal.js` - Controlador principal de la aplicación
- `tabs.js` - Sistema de pestañas para navegación
- `service.js` - Servicios para peticiones HTTP
- `user-list.js`, `user-item.js`, `user-detail.js` - Gestión de usuarios
- `post-list.js`, `post.js` - Manejo de publicaciones
- `album-list.js`, `album.js` - Gestión de álbumes
- `photo-list.js`, `photo.js` - Manejo de fotografías
- `task-list.js`, `task.js` - Sistema de tareas
- `comment-list.js`, `comment.js` - Gestión de comentarios

### 3. Desarrollo Web

#### **[feat/web-app](../../tree/feat/web-app)** - Aplicación Web Básica
Introducción al desarrollo web con HTML, CSS y JavaScript básico.

#### **[feat/server](../../tree/feat/server)** - Servidor con Node.js
Implementación de un servidor básico usando Node.js:

**Características:**
- Configuración con ES6 modules (`"type": "module"`)
- Servidor HTTP básico con Node.js
- Estructura de directorios públicos
- Script de inicio: `npm start`

### 4. Desarrollo de E-commerce

#### **[feat/shop](../../tree/feat/shop)** - Tienda Virtual Básica
Primera versión de una aplicación de e-commerce:

**Archivos principales:**
- `app.js` - Lógica principal de la aplicación
- `app-dependencies.js` - Manejo de dependencias

#### **[feat/shop-modules](../../tree/feat/shop-modules)** - Tienda con Arquitectura Modular
Versión avanzada con arquitectura modular y componentes reutilizables:

**Componentes modulares:**
- `app.js` - Aplicación principal y orquestador
- `component.js` - Clase base para componentes
- `element-attribute.js` - Utilidad para manejo de atributos DOM
- `product.js` - Modelo de datos para productos
- `product-item.js` - Componente individual de producto
- `product-list.js` - Lista de productos
- `shop.js` - Componente principal de la tienda
- `shopping-cart.js` - Carrito de compras funcional

**Características implementadas:**
- Arquitectura basada en componentes
- Carrito de compras interactivo
- Gestión de estado de productos
- Interfaz de usuario dinámica
- Separación clara de responsabilidades

### 5. Aplicaciones Específicas

#### **[feat/temperature](../../tree/feat/temperature)** - Conversor de Temperaturas
Aplicación práctica para conversión entre diferentes escalas de temperatura:
- Conversión entre Celsius, Fahrenheit y Kelvin
- Interfaz de usuario intuitiva
- Validación de datos de entrada

### 6. Testing y Calidad de Código

#### **[feat/testing](../../tree/feat/testing)** - Pruebas Automatizadas
Implementación completa de testing con Vitest:

**Configuración de testing:**
- Framework: Vitest para pruebas unitarias
- Configuración con `vite.config.js` y `vitest.setup.js`
- Scripts: `npm test` y `npm test:ui`

**Archivos de prueba:**
- `app.test.js` - Pruebas de la aplicación principal
- `component.test.js` - Pruebas de componentes base
- `element-attribute.test.js` - Pruebas de utilidades DOM
- `main.test.js` - Pruebas del módulo principal
- `product.test.js` - Pruebas del modelo de productos
- `product-item.test.js` - Pruebas de componentes de producto
- `product-list.test.js` - Pruebas de listas de productos
- `shop.test.js` - Pruebas de la tienda
- `shopping-cart.test.js` - Pruebas del carrito de compras
- `sum.testing.js` - Ejemplos básicos de testing

**Cobertura de testing:**
- Pruebas unitarias para todos los componentes
- Testing de funcionalidades del carrito
- Validación de modelos de datos
- Pruebas de utilidades y helpers

## Conocimientos Cubiertos

El curso abarca una amplia gama de conocimientos de JavaScript, desde conceptos básicos hasta aplicaciones avanzadas:

### Programación Básica
- **Sintaxis y Estructuras**: Variables (var, let, const), constantes, operadores, condicionales, bucles
- **Funciones**: Declaración, expresiones, funciones flecha, parámetros, retorno, closures
- **Objetos y Arrays**: Creación, manipulación, métodos nativos, iteración avanzada
- **Hoisting**: Comportamiento de variables y funciones
- **Scope y Contexto**: Manejo de this, bind, contexto de ejecución

### Programación Avanzada
- **Programación Asíncrona**: Callbacks, Promesas, async/await, manejo de errores
- **APIs Web**: XMLHttpRequest, Fetch API, consumo de APIs REST
- **Métodos de Arrays**: map, filter, reduce, forEach, some, every, find
- **ES6+ Features**: Desestructuración, spread operator, rest parameters, clases
- **Módulos**: Import/export, arquitectura modular

### Desarrollo Web
- **DOM**: Selección, creación, modificación y eliminación de elementos
- **Eventos**: Manejo de eventos del usuario y del navegador  
- **Interfaces Dinámicas**: Creación de componentes interactivos
- **SPA**: Aplicaciones de una sola página con JavaScript puro

### Arquitectura de Software
- **Patrones de Diseño**: Componentes reutilizables, separación de responsabilidades
- **Arquitectura Modular**: Organización de código en módulos cohesivos
- **Estado de Aplicación**: Gestión de estado sin frameworks
- **Testing**: Pruebas unitarias con Vitest, TDD, cobertura de código

### Aplicaciones Prácticas
- **E-commerce**: Carrito de compras, catálogo de productos, gestión de inventario
- **Portales Web**: Sistemas de navegación, gestión de contenido dinámico
- **Utilidades**: Conversores, calculadoras, herramientas de uso general
- **Servidores**: Implementación de servidores HTTP básicos con Node.js

## Cómo Usar Este Repositorio

### Navegación por Ramas
1. **Clona el repositorio**: 
   ```bash
   git clone https://github.com/cursosdevfull/Javascript_Group06.git
   cd Javascript_Group06
   ```

2. **Explora las diferentes ramas temáticas**:
   ```bash
   # Para ver los fundamentos de JavaScript
   git checkout feat/basic-javascript
   
   # Para explorar el manejo de promesas
   git checkout feat/promises
   
   # Para ver la aplicación con promesas
   git checkout feat/app-promises
   
   # Para explorar el e-commerce modular
   git checkout feat/shop-modules
   
   # Para ver las pruebas automatizadas
   git checkout feat/testing
   ```

### Ejecución de Proyectos

**Para proyectos con Node.js (feat/server, feat/testing)**:
```bash
npm install  # Instalar dependencias
npm start    # Ejecutar servidor (feat/server)
npm test     # Ejecutar pruebas (feat/testing)
```

**Para aplicaciones web (feat/shop, feat/shop-modules, feat/app-promises)**:
- Abrir `index.html` en el navegador
- Usar Live Server en VS Code para desarrollo
- Los archivos están listos para ejecución directa

**Para ejercicios básicos (feat/basic-javascript)**:
- Cada módulo contiene su propio `index.html`
- Revisar el código JavaScript en los archivos correspondientes
- Ejecutar directamente en el navegador

### Progresión Recomendada

1. **Comenzar con**: `feat/basic-javascript` - Fundamentos sólidos
2. **Continuar con**: `feat/promises` - Programación asíncrona  
3. **Practicar con**: `feat/app-promises` - Aplicación real con promesas
4. **Desarrollar**: `feat/shop` - Primera aplicación completa
5. **Mejorar con**: `feat/shop-modules` - Arquitectura modular
6. **Complementar con**: `feat/temperature` - Aplicación adicional
7. **Validar con**: `feat/testing` - Pruebas y calidad de código

## Requisitos

- Conocimientos básicos de programación
- Node.js instalado para ejecutar los ejemplos
- Editor de código (recomendado: Visual Studio Code)

---

Curso impartido por [CursosDev](https://cursos-dev.com)