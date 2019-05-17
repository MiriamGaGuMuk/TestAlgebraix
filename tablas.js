let array = [
    {  nombre: "Ana",
        frutaPreferida: "Manzana",
        fechas:"2018-09-21"
    },
    {  nombre: "Viridiana",
        frutaPreferida: "Mango",
        fechas:"2017-10-11"
    },
    {  nombre: "Saúl",
        frutaPreferida: "Blueberry",
        fechas:"2018-06-03"
    },
    {  nombre: "Roxana",
        frutaPreferida: "Blueberry",
        fechas:"2015-10-01"
    }
    
];

const newOrder = array.sort((a, b) => new Date(b.fechas) - new Date(a.fechas));
// console.log(newOrder);

const fillTable = () => {

    const content__sorted = document.getElementById('content__sorted')
    console.log('hola')
    console.log(newOrder);
       
    newOrder.map(e => {
        console.log(e)

            let info = 
                    `
                <tr >
                    <td class="name">${e.nombre}</td>
                    <td>${e.frutaPreferida}</td>
                    <td>${e.fechas}</td>
            
                </tr>              
                     `
        return (content__sorted.innerHTML += info)
    });
}
