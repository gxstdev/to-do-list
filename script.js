const listaTarefa = []

//add um valor booleano
const criarTarefa = (nomeTarefa, descricaoTarefa) => { 
    return tarefa = {
        id: 0,
        nomeTarefa: nomeTarefa,
        descricaoTarefa: descricaoTarefa,
        emAberto: 'A concluir'
    }
}

const addTarefa = (tarefa) => {
    listaTarefa.push(tarefa)
    let index = listaTarefa.length - 1
    if (index !== 0) {
         listaTarefa[index].id = listaTarefa[index - 1].id + 1
    }
}

const editarTarefa = () => {
    let index = Number(window.prompt('Digite o número da tarefa a editar: '))
    let opt = false
    try {
        listaTarefa[index].id
        opt = Number(window.prompt('Deseja alterar:\n(1) - TAREFA COMPLETA\n(2) - NOME TAREFA\n(3) - DESCRIÇÃO TAREFA'))
        
    } catch (error) {
        return alert('Não existe uma tarefa com esse número!')
    }
    let novoNomeTarefa
    let novaDescricaoTarefa
    
    switch (opt) {
        case 1:
            novoNomeTarefa = window.prompt('Digite o novo nome: ')
            novaDescricaoTarefa = window.prompt('Digite a nova descrição: ')  
            try {
                listaTarefa[index].nomeTarefa = novoNomeTarefa
                listaTarefa[index].descricaoTarefa = novaDescricaoTarefa  
            } catch (error) {
                alert('Digite um número de tarefa válido!')
                console.log(error);
            }  
        break;
        case 2:
            novoNomeTarefa = window.prompt('Digite o novo nome: ')
            try {
                listaTarefa[index].nomeTarefa = novoNomeTarefa 
            } catch (error) {
                alert('Digite um número de tarefa válido!')
                console.log(error);
            }
        break;
        case 3:
            novaDescricaoTarefa = window.prompt('Digite a nova descrição: ')
            try {
                listaTarefa[index].descricaoTarefa = novaDescricaoTarefa  
            } catch (error) {
                alert('Digite um número de tarefa válido!')
                console.log(error);
            }
        break;
        default:
            window.alert('Opção inválida!')
        break;
    }
         
}
const removerTarefa = () => {
    let indexRemocao = Number(window.prompt('Digite o número da tarefa você quer remover?'))
    
    if (indexRemocao > listaTarefa.length - 1) {
        alert('Não existe uma tarefa com esse número!')
    }
    else{
        listaTarefa.splice(indexRemocao, 1)
        alert('Tarefa removida!') 
    }

    // indexRemocao > listaTarefa.length - 1 
    // ?
    // alert('Não existe um tarefa com esse número!')
    // :
    // listaTarefa.splice(indexRemocao, 1),  alert('Tarefa removida!') 
}
const buscarTarefa = () => {
    let idDigitado = Number(window.prompt('Digite o id da terefa: ')) 
    
    let tarefa = listaTarefa.find(elemento => elemento.id === idDigitado)
    
    //let tarefa
    // for (i in listaTarefa) {
    //     if (listaTarefa[i].id === idTarefa) {
    //         tarefa = listaTarefa[i]
    //     }
    // }
   
    if(tarefa){
        console.table(tarefa)
    }
    else{
        alert('Não existe uma tarefa com esse id!');
    }
}

const concluirTarefa = (numeroId) => {
    for (i in listaTarefa) {
       if (listaTarefa[i].id === numeroId) {
           return listaTarefa[i].emAberto = 'Tarefa concluída.'
       } 
    }
    return alert('Não existe um tarefa com esse id!')
}


let opcaoTarefa = 0 
do{
    opcaoTarefa = parseInt(prompt('Digite a opção que deseja realizar:' + 
    '\n(1) - Cadastrar Tarefa\n(2) - Editar Tarefa' +
    '\n(3) - Remover Tarefa\n(4) - Listar Tarefas' +
    '\n(5) - Listar tarefa por id\n(6) - Concluir tarefa \n(7) - Finalizar Programa')) 

    switch (opcaoTarefa) {
        case 1:
           let nomeTarefa = window.prompt('Digite o nome da tarefa: ') 
           let descricaoTarefa = window.prompt('Digite a descrição da tarefa: ')    
           addTarefa((criarTarefa(nomeTarefa, descricaoTarefa)))
        break;
        case 2:
            editarTarefa()
        break;
        case 3:
            removerTarefa()
        break;    
        case 4:
            console.table(listaTarefa);
        break;   
        case 5: 
            buscarTarefa()
        break;
        case 6:
            let numeroId = Number(window.prompt('Digite o número de id da tarefa: '))
            concluirTarefa(numeroId)
        break;        
        default:
        break;
    }
}while(opcaoTarefa !== 7)
