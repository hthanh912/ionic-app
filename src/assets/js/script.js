function showAlert() {
    let d = new Date();
    alert("Today's date is " + d);
    
    const newElement = document.createElement('div');
    newElement.innerText = 'Hello from the external script!';
    document.body.appendChild(newElement);
}