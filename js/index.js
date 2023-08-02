function decrease() {
    let count = document.getElementById('count').value;

    if (count > count - 1){
        count--;
        document.getElementById('count').value = count;
    }
}

function increase(){
    let count = document.getElementById('count').value;

    if (count < count + 1){
        count++;
        document.getElementById('count').value = count;
    }
}