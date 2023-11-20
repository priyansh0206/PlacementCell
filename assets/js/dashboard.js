function exportToCsv(tableId, tableName) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody > tr');
    const csvContent = [];

    // Add table name as the first row
    csvContent.push([tableName]);

    // Add header row
    const headerRow = Array.from(table.querySelectorAll('thead > tr th')).map(cell => cell.innerText);
    csvContent.push(headerRow.join(','));

    // Add data rows
    rows.forEach(row => {
        const rowData = Array.from(row.children).map(cell => cell.innerText);
        csvContent.push(rowData.join(','));
    });

    // Create a Blob and a link to trigger the download
    const csvBlob = new Blob([csvContent.join('\n')], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'table_data.csv';

    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}