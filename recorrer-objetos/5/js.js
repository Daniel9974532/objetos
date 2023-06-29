let usuarios = {
  183344: "habilitado",
  354625: "habilitado",
  6762442: "inhabilitado",
  88552: "inhabilitado",
  438276: "habilitado"
};

let contador = 0;
for (let clave in usuarios) {
  let si = usuarios[clave];
  
  if (si == "habilitado") {
    contador++;
  }
}

console.log("Usuarios habilitados: ",contador);
