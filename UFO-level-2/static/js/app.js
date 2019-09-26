// from data.js
var tableData = data;
var results = {}

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

    // Select the input element and get the raw HTML node
  var inputElementCity = d3.select("#city");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    // Get the value property of the input element
    var inputValueCity = inputElementCity.property("value");

  console.log(inputValueCity);
  console.log(tableData);
  
  // Object.entries(newsighting).forEach(([key,value]) => {
  //   if value = inputValue => results.append(newsighting);
  //   if newsighting.city = inputValueCity => results.append(newsighting);
  // })

  console.log(results)

  // Get the filtered data (dates matching input on date form -- inputValue)
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  var filteredDataCity = filteredData.filter(sighting => sighting.city === inputValueCity);
  console.log(filteredData);
  console.log(filteredDataCity);

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


  

