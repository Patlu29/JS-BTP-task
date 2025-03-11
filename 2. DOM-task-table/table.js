function count() {
  let rowCount = document.getElementsByClassName("input-row")[0].value;
  let columnCount = document.getElementsByClassName("input-column")[0].value;
  let table = document.getElementsByClassName("table")[0];

  for (let tableRowCount = 1; tableRowCount <= rowCount; tableRowCount++) {
    let tableRow = document.createElement("tr");
    for (
      let tableColumnCount = 1;
      tableColumnCount <= columnCount;
      tableColumnCount++
    ) {
      let tableColumn = document.createElement("td");
      let content = document.createTextNode(
        `R: ${tableRowCount}, C: ${tableColumnCount}`
      );
      tableColumn.appendChild(content);
      tableRow.appendChild(tableColumn);
    }
    table.appendChild(tableRow);
  }

  document.getElementsByClassName("input-row")[0].value = "";
  document.getElementsByClassName("input-column")[0].value = "";
}
