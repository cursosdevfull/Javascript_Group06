# Portal Web con Promesas - JavaScript Group06

Esta aplicación web demuestra el uso práctico de **Promesas en JavaScript** a través de un portal interactivo que consume APIs externas. El proyecto implementa una arquitectura modular con JavaScript puro (Vanilla JS) y manejo asíncrono avanzado.

## 🚀 Características Principales

- **Portal de usuarios** con navegación por pestañas
- **Gestión completa de contenido**: usuarios, posts, álbumes, fotos, tareas y comentarios  
- **Arquitectura modular** con separación clara de responsabilidades
- **Servicios asíncronos** para consumo de APIs REST
- **Interfaz dinámica** generada completamente con JavaScript
- **Manejo de promesas** en operaciones de red y UI

## 📁 Estructura del Proyecto

```
├── index.html                 # Punto de entrada de la aplicación
├── assets/
│   ├── styles/
│   │   └── app.css           # Estilos de la aplicación
│   └── scripts/
│       ├── app.js            # Configuración e inicialización
│       ├── portal.js         # Controlador principal del portal
│       ├── tabs.js           # Sistema de navegación por pestañas
│       ├── service.js        # Servicios HTTP y manejo de promesas
│       ├── selectors.js      # Selectores DOM centralizados
│       ├── utils.js          # Utilidades y helpers
│       │
│       ├── user-list.js      # Lista de usuarios
│       ├── user-item.js      # Componente individual de usuario
│       ├── user-detail.js    # Vista detallada de usuario
│       ├── user.js           # Modelo y lógica de usuario
│       │
│       ├── post-list.js      # Lista de publicaciones
│       ├── post.js           # Componente de publicación
│       │
│       ├── album-list.js     # Lista de álbumes
│       ├── album.js          # Componente de álbum
│       │
│       ├── photo-list.js     # Lista de fotografías
│       ├── photo.js          # Componente de fotografía
│       │
│       ├── task-list.js      # Lista de tareas
│       ├── task.js           # Componente de tarea
│       │
│       ├── comment-list.js   # Lista de comentarios
│       └── comment.js        # Componente de comentario
```

## 🏗️ Arquitectura de la Aplicación

### Patrón de Arquitectura
La aplicación sigue un **patrón modular** con separación de responsabilidades:

- **Portal Controller** (`portal.js`): Orquesta toda la aplicación
- **Tab System** (`tabs.js`): Maneja la navegación entre secciones
- **Service Layer** (`service.js`): Abstrae las llamadas a APIs
- **Components**: Cada entidad tiene su propio conjunto de componentes
- **Models**: Lógica de negocio separada de la presentación

### Flujo de Datos
1. **Inicialización**: `app.js` configura la aplicación
2. **Portal**: `portal.js` controla el estado global
3. **Tabs**: Navegación reactiva entre secciones
4. **Services**: Peticiones asíncronas con promesas
5. **Components**: Renderizado dinámico de UI

## ⚡ Tecnologías de Promesas Implementadas

### 1. Service Layer con Promesas
```javascript
// Ejemplo del patrón implementado en service.js
class ApiService {
  static async fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
}
```

### 2. Manejo Asíncrono en Componentes
- **Carga de datos**: Promesas para obtener información de APIs
- **Renderizado progresivo**: UI que se actualiza conforme llegan los datos
- **Manejo de errores**: Estrategias robustas para fallos de red

### 3. Composición de Promesas
- **Promise chaining**: Encadenamiento de operaciones asíncronas
- **Promise.all**: Carga paralela de múltiples recursos
- **Async/await**: Sintaxis moderna para operaciones asíncronas

## 🎯 Funcionalidades por Sección

### 👥 Usuarios
- **Lista de usuarios**: Vista general con información básica
- **Detalle de usuario**: Información completa del usuario seleccionado
- **Navegación**: Transiciones fluidas entre lista y detalle

### 📝 Posts
- **Publicaciones por usuario**: Posts filtrados por autor
- **Vista de lista**: Título y contenido de cada publicación
- **Carga dinámica**: Contenido que se carga bajo demanda

### 🖼️ Álbumes y Fotos
- **Álbumes por usuario**: Colecciones de imágenes organizadas
- **Galería de fotos**: Vista de imágenes con lazy loading
- **Navegación de imágenes**: Interfaz intuitiva para explorar fotos

### ✅ Tareas
- **Lista de tareas**: Tareas pendientes y completadas
- **Estado visual**: Indicadores claros del estado de cada tarea
- **Filtros**: Visualización por estado (completadas/pendientes)

### 💬 Comentarios
- **Comentarios por post**: Hilos de discusión organizados
- **Información del autor**: Detalles de quien comenta
- **Carga contextual**: Comentarios que se cargan según el contexto

## 🚀 Cómo Ejecutar la Aplicación

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (recomendado: Live Server de VS Code)

### Instalación y Ejecución
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/cursosdevfull/Javascript_Group06.git
   cd Javascript_Group06
   git checkout feat/app-promises
   ```

2. **Ejecutar con Live Server**:
   - Abrir VS Code en el directorio del proyecto
   - Instalar la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **Ejecutar manualmente**:
   - Abrir `index.html` directamente en el navegador
   - Asegurarse de que el navegador permita peticiones CORS

### URLs de Prueba
La aplicación consume datos de [JSONPlaceholder](https://jsonplaceholder.typicode.com/):
- Usuarios: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts`
- Álbumes: `https://jsonplaceholder.typicode.com/albums`
- Fotos: `https://jsonplaceholder.typicode.com/photos`
- Tareas: `https://jsonplaceholder.typicode.com/todos`
- Comentarios: `https://jsonplaceholder.typicode.com/comments`

## 📚 Conceptos de JavaScript Demostrados

### Promesas y Asincronía
- **Promise constructor**: Creación de promesas personalizadas
- **then/catch**: Manejo tradicional de promesas
- **async/await**: Sintaxis moderna para código asíncrono
- **Promise.all**: Ejecución paralela de múltiples promesas
- **Error handling**: Manejo robusto de errores asincrónicos

### Arquitectura Modular
- **Module pattern**: Organización de código en módulos
- **Separation of concerns**: Separación clara de responsabilidades  
- **Component composition**: Composición de componentes reutilizables
- **Service layer**: Abstracción de servicios externos

### Manipulación del DOM
- **Dynamic rendering**: Generación dinámica de elementos
- **Event delegation**: Manejo eficiente de eventos
- **State management**: Gestión de estado sin frameworks
- **Progressive enhancement**: Mejora progresiva de la UI

## 🎓 Objetivos de Aprendizaje

Al completar este proyecto, habrás aprendido:

1. **Arquitectura de aplicaciones** JavaScript modernas
2. **Manejo avanzado de promesas** en aplicaciones reales
3. **Consumo de APIs REST** con diferentes técnicas
4. **Organización de código** en proyectos de mediana complejidad
5. **Patrones de diseño** para aplicaciones frontend
6. **Gestión de estado** sin frameworks externos
7. **Renderizado dinámico** y manipulación del DOM
8. **Manejo de errores** en aplicaciones asíncronas

---

**Curso desarrollado por**: [CursosDev](https://cursos-dev.com)  
**Nivel**: Intermedio  
**Tecnologías**: JavaScript ES6+, Fetch API, Promesas, DOM, CSS3