function iniciarDataTable() {
    let table = $('#empleos-table').DataTable();

    if ($.fn.DataTable.isDataTable("#empleos-table")) {
        table.destroy(); // Destruir DataTable anterior si ya existe
    }

    $('#empleos-table').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        responsive: true,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]],
        pageLength: 10,
        info: true,
        autoWidth: false,
        stateSave: true,
        processing: true,
        language: {
            url: "//cdn.datatables.net/plug-ins/2.2.2/i18n/Spanish.json"
        },
        dom: '<"top"lfB>rt<"bottom"ip><"clear">', // Personaliza la disposición de la tabla
        buttons: [
            { extend: 'copyHtml5', text: 'Copiar', className: 'btn btn-primary' },
            { extend: 'csvHtml5', text: 'Exportar CSV', className: 'btn btn-success' },
            { extend: 'excelHtml5', text: 'Exportar Excel', className: 'btn btn-warning' },
            { extend: 'pdfHtml5', text: 'Exportar PDF', className: 'btn btn-danger' },
            { extend: 'print', text: 'Imprimir', className: 'btn btn-info' }
        ]
    });
}

