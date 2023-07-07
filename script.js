

function inputCleaner() {
    document.getElementById('input').value = ''
}



function keyUp(e) {
    let key = e.key.toLowerCase()
    document.getElementById(key).style.backgroundColor = 'rgb(106, 179, 120)' // Green
    

    document.getElementById('g').style.backgroundColor = 'rgb(245, 155, 210)'
    document.getElementById('h').style.backgroundColor = 'rgb(245, 155, 210)'
}


function keyDown(e) {
    let key = e.key.toLowerCase()
    if (key === 'delete') {
        inputCleaner()
    }
    else {
        document.getElementById(key).style.backgroundColor = 'rgb(236, 230, 145)' // yellow
    }
}


