
const searchBox = document.getElementById('search-box');
const tableRows = document.querySelectorAll('tbody tr');

searchBox.addEventListener('input', function () {
    const searchValue = searchBox.value.toLowerCase();

    tableRows.forEach(row => {
        const studentName = row.querySelector('td').textContent.toLowerCase();
        if (studentName.includes(searchValue)) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
});

const table = document.querySelector('table');


table.addEventListener('input', function (event) {
    const cell = event.target;

    if (cell.isContentEditable && !isNaN(cell.textContent)) {
        const row = cell.parentElement;
        const marksBefore = parseInt(row.children[2].textContent) || 0;
        const reducedMarks = parseInt(row.children[3].textContent) || 0;
        row.children[4].textContent = marksBefore - reducedMarks;
    }
});


function filterTable() {
    const searchBox = document.getElementById('search-box');
    const filter = searchBox.value.toLowerCase();
    const table = document.getElementById('studentTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                const cellValue = cells[j].textContent || cells[j].innerText;
                if (cellValue.toLowerCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }

        rows[i].style.display = found ? '' : 'none';
    }
}