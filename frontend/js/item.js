function fillItemDetails(item) {

    let itemNameHeader = document.querySelector('.item_header')
    itemNameHeader.innerHTML = item.title

    let itemDescTd = document.querySelector('.item_description')
    itemDescTd.innerHTML = item.content

    let itemCostTd = document.querySelector('#cost_td')
    itemCostTd.innerHTML = item.cost

    let itemCategoryTd = document.querySelector('#category_td')
    itemCategoryTd.innerHTML = item.category;
}

function getItem() {
    let item_id = document.location.search.split("=")[1];
    var myHeaders = new Headers();
    let req_options = {
        method: "GET",
        headers: myHeaders,
        redirect:'follow'
    }

    console.log('itemid = ', item_id)

    let uri_str = "https://j2my5r4vr7.execute-api.us-west-2.amazonaws.com/dev/item/" + item_id
    

    fetch( uri_str, req_options )
            .then( resp => resp.json() )
            .then( val => {
                console.log('response from item =', val)
                fillItemDetails(val)
            })
            .catch(err => {
                console.log('error getting item info, ', err)
            }) 
}



window.onload = function() {


    getItem()

}