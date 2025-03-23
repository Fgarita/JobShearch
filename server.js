async function loadEmpleos() {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXHE4hmIka9vAWmNj-xh4CZF6VQ4S2Janv5Mv2qeSTKk7OhxZpTs5eGXS8bPSnV0A8eT5CP86Mh-H2/pub?gid=370618771&single=true&output=csv";

    try {
        const response = await fetch(url);
        const text = await response.text();

        // Convertir CSV en un array de objetos
        const rows = text.trim().split("\n").slice(1); // Ignorar encabezados
        const empleos = rows.map(row => {
            const [Empresa, Correo, Ubicacion] = row.split(",");
            return { Empresa, Correo, Ubicacion };
        });

        console.log("Empleos obtenidos:", empleos);

        // Mostrar en la tabla
        const tableBody = document.querySelector("#empleos-table tbody");
        tableBody.innerHTML = "";

        empleos.forEach((empleo) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${empleo.Empresa}</td>
                <td>${empleo.Correo}</td>
                <td>${empleo.Ubicacion}</td>`;
            tableBody.appendChild(row);
        });

        // Llamar la función para inicializar DataTable después de cargar los datos
        iniciarDataTable();

    } catch (error) {
        console.error("Error al cargar los empleos:", error);
    }
}

// Llamar la función al cargar la página
document.addEventListener("DOMContentLoaded", loadEmpleos);
