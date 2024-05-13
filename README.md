# 🚀Proyecto del Curso de JavaScript: Crea páginas dinámicas🚀

El proyecto del curso es el Alura Midi que es un instrumento musical de interfaz digital al cual le agregamos las funcionalidades necesarias en el transcurso del curso.

## :fire: Instructores y encargados:

---
 Con :blue_heart: 
- [Alura Latam](https://www.aluracursos.com/) 
- [Instructora: Jeanmarie Quijada](https://github.com/JeanmarieAluraLatam)

---
## 🚀 LINK de despliegue:
[:open_file_folder: Abrir AluraMidi :open_file_folder:](https://luisfervr.github.io/AluraMidi-Curso/)

---
## :page_with_curl: Dev-Notes :page_with_curl:
Cabe mencionar que por los conocimientos ya adquiridos durante toda mi formación, por cuestión personal se me hizo fácil y entendible las siguientes nota:

* Con querySelector puedes obtener cualquier objeto del DOM (elemento) , y si quieres guardar la referencia de una función debes quitar los parentesis al final de su llamado, ya que estos la ejecutan inmediatamente.

  Ej: document.querySelector('.tecla__pomp').onclick = nombreDeLaFuncion

* Las funciones anónimas se usan cuando quieres que ante un evento se realice algo.
el parámetro evento de las funciones anónimas captura los eventos del teclado. Por ejemplo:
evento.code y permite  saber la tecla presionada y realizar algo con ella, ejemplo:
evento.code === 'Space'.
