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

// On click
button.on("click", function () {

  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");


  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  console.log("inputdate:", inputValueDate);
  console.log("inputcity:", inputValueCity);
  console.log("inputstate:", inputValueState);
  console.log("inputcountry:", inputValueCountry);
  console.log("inputshape:", inputValueShape);


  //Datetime
  //if datetime filter is null do nothing (set output = tableData)
  if (!inputValueDate) {
    var output = tableData
  }
  //else output = filter tableData
  else {
    var output = tableData.filter(sighting => sighting.datetime === inputValueDate);
  }

  //City
  //if city filter is null set output = output
  if (!inputValueCity) {
    output = output
  }
  //else output = filter output
  else {
    output = output.filter(sighting => sighting.city === inputValueCity);
  }

  //State
  //if state filter is null set output = output
  if (!inputValueState) {
    output = output
  }
  //else output = filter output
  else {
    output = output.filter(sighting => sighting.state === inputValueState);
  }

  //Country
  //if country filter is null set output = output
  if (!inputValueCountry) {
    output = output
  }
  //else output = filter output
  else {
    output = output.filter(sighting => sighting.country === inputValueCountry);
  }

  //Shape
  //if shape filter is null set output = output
  if (!inputValueShape) {
    output = output
    console.log("output", output);
  }
  //else output = filter output
  else {
    output = output.filter(sighting => sighting.shape === inputValueShape);
  }


  //Delete current data in table
  body = document.querySelector('tbody');
  while (body.firstChild) {
    body.removeChild(body.firstChild); //This will remove all children within tbody
  }

  //Write output data to the table  
  output.forEach((sighting) => {
    var filteredRow = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var filteredCell = filteredRow.append("td");
      filteredCell.text(value);
    });
  });
});



















  //else delete current entries
  //     filter 'outputDate' data (set = outputDateCity)

  //State
  //if state filter is null set outputDateCityState = outputDateCity
  //else delete current entries
  //     filter 'outputDateCity' data (set = outputDateCityState)

  //Country
  //if country filter is null set outputDateCityStateCountry = outputDateCityState
  //else delete current entries
  //     filter 'outputDateCityState' data (set = outputDateCityStateCountry)

  //Shape
  //if shape filter is null set outputDateCityStateCountryShape = outputDateCityStateCountry
  //else delete current entries
  //     filter 'outputDateCityStateCountry' data (set = outputDateCityStateCountryShape)


  // Delete existing data before appending filtered data
  // var body = document.querySelector('tbody');
  // while (body.firstChild) {
  //   // This will remove all children within tbody which in your case are <tr> elements
  //   body.removeChild(body.firstChild);
  // }





  // // If date is null
  // if (!inputValueDate) {
  //   //  Repopulate with original data
  //   data.forEach((sighting) => {
  //     var row = tbody.append("tr");
  //     Object.entries(sighting).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });
  // }
  // else { //If date is not null
  // // Get filtered data based on user-entered date field
  //   var filteredDateData = tableData.filter(sighting => sighting.datetime === inputValueDate);
  //   filteredDateData.forEach((sighting) => {
  //     var filteredRow = tbody.append("tr");
  //     Object.entries(sighting).forEach(([key, value]) => {
  //       var filteredCell = filteredRow.append("td");
  //       filteredCell.text(value);
  //     });
  //   });
  //   };

  //   // If city is null AND date is null
  // if (!inputValueCity) {
  //   //  //  Repopulate with original data
  //   data.forEach((sighting) => {
  //     var row = tbody.append("tr");
  //     Object.entries(sighting).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });
  // }
  // // 


  //   greeting = "null city";
  //   console.log("Status: ", greeting);
  // }else{console.log("Status: ", greeting);



  // // Get the filtered data (dates matching input on date form -- inputValue)
  // var filteredData = tableData.filter(sighting => sighting.datetime === inputValueDate);
  // var filteredDataCity = tableData.filter(sighting => sighting.city === inputValueCity);
  // console.log(filteredData);
  // console.log(filteredDataCity);



  // //  Loop though the data table.  Append the table row with filtered object. 
  // filteredData.forEach((sighting) => {
  //   var filteredRow = tbody.append("tr");
  //   Object.entries(sighting).forEach(([key, value]) => {
  //     var filteredCell = filteredRow.append("td");
  //     filteredCell.text(value);
  //   });
  // });


