function showProduct(response) {
    const element = document.querySelector('.result-container');
    element.innerHTML += 
    `<div class="box">
        <div><img src="${response.image}" alt="recieved-image" height="100px" width="100px"></div>
        <div>${response.answer}</div>
    </div>`;
}

function handleError(request) {
    console.error(`Status: ${request.status} and Message: ${request.responseText}`);
}

/*
// Do not work due to an error: Refused to get unsafe header "X-API-Quota-Used"

function updateCount(headers){
    let element = document.querySelector('#request-count');
    // const countObject = JSON.parse(headers);
    console.log(headers);
    element = `Request count ${headers}/150`;
}
*/

export {showProduct, handleError};