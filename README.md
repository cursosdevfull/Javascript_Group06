# Javascript_Group06

## Descripción
Este repositorio contiene ejercicios y ejemplos prácticos para el aprendizaje de JavaScript fundamentals. Está diseñado como un curso paso a paso que cubre los conceptos básicos del lenguaje.

## Estructura del Proyecto

### 📚 Módulos de Aprendizaje

1. **01-variables/** - Conceptos básicos de variables
   - Declaración de variables (var, let, const)
   - Tipos de datos
   - Scope de variables

2. **02-hoisting/** - Hoisting en JavaScript
   - Comportamiento del hoisting
   - Variables y funciones

3. **03-strict/** - Modo estricto
   - Uso de 'use strict'
   - Diferencias y beneficios

4. **04-operador-rest/** - Operador Rest
   - Sintaxis rest (...)
   - Parámetros rest en funciones

5. **05-funciones/** - Funciones en JavaScript
   - Declaración de funciones
   - Expresiones de función
   - Arrow functions

6. **06-bucles/** - Estructuras de control iterativas
   - for, while, do-while
   - for...in, for...of

7. **07-funciones-dentro-funciones/** - Funciones anidadas
   - Closures
   - Scope anidado

8. **08-funciones-callback/** - Funciones callback
   - Concepto de callback
   - Programación asíncrona básica

9. **09-bind/** - Método bind
   - Uso del método bind()
   - Control del contexto 'this'
   - Binding de funciones

10. **10-bind-calculadora/** - Aplicación práctica de bind
    - Calculadora con bind
    - Manejo de contexto en aplicaciones
    - Ejemplo práctico con CSS y HTML

11. **11-bind-contexto/** - Contexto con bind
    - Casos avanzados de bind
    - Contexto de ejecución
    - Resolución de problemas comunes

12. **12-window/** - Objeto window
    - Propiedades del objeto global
    - Métodos del objeto window
    - Scope global vs local

13. **13-seleccion-elementos/** - Selección de elementos DOM
    - document.getElementById()
    - document.querySelector()
    - document.querySelectorAll()
    - Diferencias entre métodos de selección

14. **14-create-elements/** - Creación de elementos
    - document.createElement()
    - Manipulación dinámica del DOM
    - Inserción de elementos

15. **15-clonar/** - Clonación de elementos
    - cloneNode()
    - Clonación superficial vs profunda
    - Casos de uso prácticos

16. **16-remove-element/** - Eliminación de elementos
    - removeChild()
    - remove()
    - Limpieza del DOM

17. **17-convert-list/** - Conversión de listas
    - Conversión entre tipos de datos
    - Array-like objects
    - NodeList a Array

18. **18-push-pop-unshift-shift/** - Métodos de arrays básicos
    - push() y pop() - final del array
    - unshift() y shift() - inicio del array
    - Manipulación de extremos

19. **19-slice/** - Método slice
    - Extracción de porciones de arrays
    - Parámetros de slice
    - Inmutabilidad del array original

20. **20-splice/** - Método splice
    - Modificación directa de arrays
    - Inserción, eliminación y reemplazo
    - Diferencias con slice

21. **21-concat/** - Concatenación de arrays
    - Unión de múltiples arrays
    - Métodos de concatenación
    - Alternativas modernas

22. **22-indexof/** - Búsqueda con indexOf
    - Encontrar índices de elementos
    - Búsqueda desde posición específica
    - Casos cuando no se encuentra el elemento

23. **23-includes/** - Verificación con includes
    - Verificar existencia de elementos
    - Diferencias con indexOf
    - Búsqueda de valores primitivos

24. **24-for-each/** - Iteración con forEach
    - Recorrido de arrays
    - Callback en forEach
    - Parámetros: elemento, índice, array

25. **25-map/** - Transformación con map
    - Crear nuevos arrays transformados
    - Inmutabilidad en map
    - Casos de uso comunes

26. **26-sort/** - Ordenamiento de arrays
    - Ordenamiento básico
    - Funciones de comparación personalizadas
    - Ordenamiento de objetos

27. **27-filter/** - Filtrado de arrays
    - Crear arrays con elementos filtrados
    - Condiciones de filtrado
    - Combinación con otros métodos

28. **28-chain/** - Encadenamiento de métodos
    - Method chaining
    - Combinación de map, filter, reduce
    - Programación funcional

29. **30-some-every/** - Métodos some y every
    - some() - verificar si algún elemento cumple condición
    - every() - verificar si todos los elementos cumplen condición
    - Validaciones con arrays

30. **31-reduce/** - Reducción de arrays
    - Reducir arrays a un solo valor
    - Acumuladores y valores iniciales
    - Casos de uso avanzados

31. **32-split-join/** - Manipulación de strings
    - split() - convertir string a array
    - join() - convertir array a string
    - Procesamiento de texto

32. **33-declarativo/** - Programación declarativa
    - Paradigma declarativo vs imperativo
    - Código más limpio y legible
    - Ejemplos comparativos

33. **34-desestructuracion-array/** - Desestructuración de arrays
    - Sintaxis de desestructuración
    - Asignación de variables desde arrays
    - Valores por defecto

34. **35-operador-spread/** - Operador spread
    - Sintaxis spread (...)
    - Expansión de arrays y objetos
    - Casos de uso prácticos

35. **36-objetos/** - Objetos en JavaScript
    - Creación y manipulación de objetos
    - Propiedades y métodos
    - Iteración sobre objetos

36. **37-clases/** - Clases ES6
    - Sintaxis de clases
    - Constructor y métodos
    - Herencia con extends
    - Diferencias con funciones constructoras

## 🚀 Cómo usar este repositorio

### Estructura de cada módulo
Cada módulo contiene:
- `index.html` - Archivo HTML para ejecutar los ejemplos
- `script.js` - Código JavaScript con los ejemplos principales
- Archivos adicionales según el módulo (script1.js, script2.js, etc.)

### Ejecutar los ejemplos

1. **Navegación básica**:
   ```bash
   git clone https://github.com/cursosdevfull/Javascript_Group06.git
   cd Javascript_Group06
   git checkout feat/basic-javascript
   ```

2. **Explorar un módulo específico**:
   - Navega a la carpeta del módulo que quieres estudiar
   - Abre el archivo `index.html` en tu navegador
   - Abre las herramientas de desarrollador (F12) para ver la consola
   - Revisa el código en los archivos `.js` correspondientes

3. **Recomendaciones de estudio**:
   - Sigue el orden numérico de las carpetas
   - Lee el código antes de ejecutar
   - Experimenta modificando los ejemplos
   - Usa la consola del navegador para probar variaciones

### Progresión recomendada

**Nivel Básico (01-08)**:
- Variables, hoisting, modo estricto
- Operador rest, funciones, bucles
- Funciones anidadas y callbacks

**Nivel Intermedio DOM (09-17)**:
- Bind y contexto
- Manipulación del DOM
- Selección y creación de elementos

**Nivel Arrays (18-32)**:
- Métodos básicos de arrays
- Métodos funcionales (map, filter, reduce)
- Encadenamiento y programación declarativa

**Nivel Avanzado (33-37)**:
- Desestructuración y spread
- Objetos y clases ES6
- Conceptos modernos de JavaScript

## 📖 Prerrequisitos

- Conocimientos básicos de HTML
- Un navegador web moderno
- Editor de código (recomendado: VS Code)

## 🛠️ Tecnologías

- JavaScript (ES6+)
- HTML5
- Navegador web

## 📝 Contenido del Curso

Este repositorio cubre un **curso completo de JavaScript fundamentals** organizado en 36 módulos progresivos:

### 🎯 Objetivos de aprendizaje:
- **Sintaxis fundamental**: Variables, tipos de datos, operadores
- **Control de flujo**: Condicionales, bucles, estructuras de control
- **Funciones**: Desde básicas hasta conceptos avanzados como closures
- **DOM**: Manipulación completa del Document Object Model
- **Arrays**: Dominio completo de métodos nativos y programación funcional
- **Objetos**: Creación, manipulación y conceptos de OOP
- **ES6+**: Características modernas como clases, desestructuración y spread

### 📊 Distribución del contenido:
- **Conceptos básicos** (módulos 01-08): 22% del curso
- **DOM y contexto** (módulos 09-17): 25% del curso  
- **Arrays y métodos** (módulos 18-32): 42% del curso
- **Conceptos avanzados** (módulos 33-37): 11% del curso

### 💡 Metodología:
- **Aprendizaje progresivo**: Cada módulo construye sobre el anterior
- **Ejemplos prácticos**: Código real y casos de uso comunes
- **Experimentación**: Código modificable para practicar
- **Aplicaciones reales**: Proyectos como calculadoras y manipulación DOM

---

**Curso desarrollado por**: [cursosdevfull](https://github.com/cursosdevfull)  
**Nivel**: Principiante a Intermedio  
**Duración estimada**: 40-60 horas de estudio  
**Módulos**: 36 lecciones completas