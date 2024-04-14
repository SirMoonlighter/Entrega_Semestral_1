// if (document.getElementById('mini_producto')) {

//     let tarjeta = document.getElementById('mini_producto').outerHTML;

//     let tarjetas = '';

//     for (i = 0; i < 5; i++) {

//         tarjetas = tarjetas + tarjeta;

//     }

//     document.getElementById('mini_producto').outerHTML = tarjetas;

// }

// Lee el contenido de un archivo llamado "menu_superior.html" donde está el código del menú de las páginas y lo copia al inicio de cada página

if (document.getElementById('menu')) {

    fetch('menu_superior.html').then(response => {

        return response.text();

    }).then(htmlContent => {

    document.getElementById('menu').innerHTML = htmlContent;

    window.scrollTo(0, 0);

    });

};

//Test  preview de imagen

const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>Sin archivo seleccionado</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 350;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
      const info = document.createElement("span");

    }
  }
}