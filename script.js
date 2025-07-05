const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      "Matemática I",
      "Introducción a la Economía",
      "Introducción a la Administración",
      "Desarrollo de Actitud Emprendedora",
      "Formación General Teológica I",
      "Taller de Habilidades I",
    ],
  },
  {
    semestre: "2° Semestre",
    ramos: [
      "Matemática II",
      "Estadística I",
      "Contabilidad Financiera I",
      "Administración General",
      "Macroeconomía I",
      "Taller de Habilidades II",
    ],
  },
  {
    semestre: "3° Semestre",
    ramos: [
      "Matemática III",
      "Estadística II",
      "Microeconomía I",
      "Contabilidad Financiera II",
      "Comportamiento Organizacional",
      "Formación General Globalización",
    ],
  },
  // Puedes seguir agregando más semestres aquí...
];

const container = document.getElementById("malla");

malla.forEach((sem) => {
  const box = document.createElement("div");
  box.className = "semestre";

  const title = document.createElement("h2");
  title.textContent = sem.semestre;
  box.appendChild(title);

  sem.ramos.forEach((ramo) => {
    const r = document.createElement("div");
    r.className = "ramo";
    r.textContent = ramo;
    box.appendChild(r);
  });

  container.appendChild(box);
});
