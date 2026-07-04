# Orux Planner (Web)

**Orux Planner** es un planificador de rutas para navegador inspirado en el
planificador de OruxMaps iOS. Permite seleccionar puntos en el mapa, calcular
rutas mediante **BRouter-Web (WASM)** y exportarlas en formato **GPX** para
usarlas posteriormente en OruxMaps u otras aplicaciones de navegación.

Este proyecto está **en desarrollo activo** y actualmente implementa la versión
mínima viable del planificador: mapa base, selección de puntos, cálculo de ruta
y exportación GPX.

---

## ✨ Características (MVP)

- Visor de mapas basado en **Leaflet**
- Selección de puntos *From* y *To* tocando el mapa
- Cálculo de rutas mediante **BRouter-Web**
- Visualización de rutas en formato GeoJSON
- Distancia y tiempo estimado
- Exportación de rutas en formato **GPX**
- Funcionamiento en cualquier navegador (PC, iPhone, iPad)
- Publicación sencilla mediante **GitHub Pages**

---

## 📁 Estructura del proyecto
orux-planner/
│
├── index.html
├── style.css
├── map.js
│
├── brouter-web.js
├── brouter-web.wasm
│
├── profiles/
│     └── *.brf
│
└── segments/
└── *.rd5

---

## 🚀 Uso

1. Abre la aplicación en tu navegador.
2. Toca el mapa para seleccionar el punto de inicio (*From*).
3. Toca de nuevo para seleccionar el destino (*To*).
4. Pulsa **Calcular ruta**.
5. La ruta se mostrará en el mapa junto con distancia y tiempo.
6. Pulsa **Exportar GPX** para descargar la ruta.

---

## 🧩 Tecnologías utilizadas

- **Leaflet** — https://leafletjs.com  
- **BRouter-Web (WASM)** — https://github.com/abrensch/brouter  
- **OpenStreetMap** — https://www.openstreetmap.org  

---

## 📜 Licencias y atribuciones

Este proyecto utiliza:

- **Leaflet** bajo licencia BSD 2-Clause  
- **BRouter-Web** bajo licencia MIT  
- **OpenStreetMap** bajo licencia ODbL  

El código propio del proyecto se publica bajo licencia **MIT**.

---

## 🛠 Estado del proyecto

Este repositorio está en **fase inicial de desarrollo**.  
Las funcionalidades y la interfaz evolucionarán progresivamente hacia una
versión más completa, incluyendo:

- selección avanzada de perfiles de enrutamiento  
- panel lateral con información detallada  
- soporte para mapas TMS/XYZ  
- integración con MapLibre GL (fase 2)  
- análisis de altitud y tipo de vía  
- compatibilidad con rutas múltiples y puntos intermedios

---

## 🤝 Contribuciones

Este proyecto forma parte de una colaboración con el desarrollador de OruxMaps
para explorar una versión web del planificador de rutas.

Las contribuciones, sugerencias y mejoras son bienvenidas.

---

## 📬 Contacto

Para dudas, sugerencias o colaboración técnica, abre un *issue* en el
repositorio o contacta directamente.

https://oruxmapsteam.github.io/OruxPlanner/
