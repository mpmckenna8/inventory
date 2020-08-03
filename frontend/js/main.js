// a js file to be the js entrypoint for this app.
 // define the callAPI function that takes a first name and last name as parameters
 var getAllItems = ()=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    //var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    fetch("https://j2my5r4vr7.execute-api.us-west-2.amazonaws.com/dev/items", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(JSON.parse(result).body)
        let allItems = JSON.parse(JSON.parse(result).body)
        console.log("allItems =", allItems)
        makeItemsTable(allItems)
       // alert(JSON.parse(result).body)
    })
    .catch(error => console.log('error with the request to get all Items', error));
}


function makeItemsTable(items) {
    let itemsTable = document.querySelector('.item_table');

    let numberOfItems = items.length;

    for( let i = 0; i < numberOfItems; i++) {

        let row = itemsTable.insertRow( i + 1 )
        // putting a cell in the new row
        let cell_0 = row.insertCell( 0 )
        cell_0.innerHTML = "<a href='item.html/?id="+ items[i].id +"'>" + items[i].title + "</a>";

        let cell_1 = row.insertCell(1)
        cell_1.innerHTML = items[i].content;
    }

}

window.onload = function() {
    getAllItems()

}