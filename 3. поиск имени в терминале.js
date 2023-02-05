let PayTerminal = ['Иван Иванов'];

function showName(youName){    
    if (PayTerminal.includes(youName)){
        alert(`Привет, ${youName}`);
    } else {
        alert('Такого имени нет');
    }
}

showName(prompt());