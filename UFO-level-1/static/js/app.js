// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

//  Loop though the data table.  Append the table row with each object. 
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

     // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  // Get the filtered data (dates matching input on date form -- inputValue)
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // Delete existing data before appending filtered data
  var body = document.querySelector('tbody');
    while (body.firstChild) {
  // This will remove all children within tbody which in your case are <tr> elements
  body.removeChild(body.firstChild);
}

  //  Loop though the data table.  Append the table row with filtered object. 
    filteredData.forEach((sighting) => {
    var filteredRow = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var filteredCell = filteredRow.append("td");
      filteredCell.text(value);
    });
  });
})


  

