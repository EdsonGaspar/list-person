let participantes =[
    {
        name:'Tony',
        email:'tony@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 21, 17, 19),
    },
    {
        name:'edson',
        email:'edson@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },
    {
        name:'gaspar',
        email:'gaspar@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },
    {
        name:'hadson',
        email:'hadson@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },
    {
        name:'luzia',
        email:'luzia@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },
    {
        name:'celestina',
        email:'celestina@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },
    {
        name:'ailton',
        email:'ailton@gmail.com',
        dataInscricao: new Date(2024, 1, 21, 14, 0),
        checkIn: new Date(2024, 2, 22, 17, 19),
    },    
]
const criarNovoParticipante = (participante) =>{
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    const checkIn = dayjs(Date.now()).to(participante.checkIn);

    return ` 
        <tr>
            <td>
                <strong>${participante.name}</strong>
                <br>
                <small>${participante.email}</small>
            </td>
            <td>${dataInscricao}</td>
            <td>${checkIn}</td>
        </tr>`
}
const actualizarLista = (participantes) =>{
    let outpot= "";
    for(let participante of participantes){
        outpot += criarNovoParticipante(participante);
    }
    // alert('Estou dentro da função');
    const listaParticipante = document.getElementById('listaPart');

    listaParticipante.innerHTML = outpot 
}

actualizarLista(participantes);