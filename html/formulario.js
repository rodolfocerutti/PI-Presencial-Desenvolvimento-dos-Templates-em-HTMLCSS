function validaFormulario() {
    const values = Array.from(document.querySelectorAll('form input')).map(component => { return component.value });
    const [email, senha, nome, endereco] = values;
    if (email, senha, nome, endereco) {
        console.log(values);
        cadastrarUsuario(
            {
                email: email,
                senha: senha,
                nome: nome,
                endereco: endereco
            }
        )
    } else {
        alert('Formulario invalido!');
    }
}

function cadastrarUsuario(data) {
    console.log(data); // retirar
    fetch('http://localhost:3000/usuarios', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    }).then(results => {
        alert(results.message);
    })
}

function getUsuarios(){
    fetch('http://localhost:3000/usuarios', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then(response => {
        console.log('GET ==>', response.json().then(results => {
            console.log(results.results);
            for (let i of results.results){
                carregarUsuarios(i['nome'], i['endereco'], i['email'])
            }
        }));
    })
}

function carregarUsuarios(nome, endereco, email){
    table = document.getElementById('usuarios')
    table.innerHTML = table.innerHTML + `
    <table class="table">
        <tr>
            <td>${nome}</td>
            <td>${endereco}</td>
            <td>${email}</td>
        </tr>
    </table>
    `
}

getUsuarios();