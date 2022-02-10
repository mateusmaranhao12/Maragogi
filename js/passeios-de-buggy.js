class Passeio {
    constructor(name, lastname, phone, email, roteiro, date, number, turno, detalhes){
        this.name = name,
        this.lastname = lastname,
        this.phone = phone,
        this.email = email,
        this.roteiro = roteiro,
        this.date = date,
        this.number = number,
        this.turno = turno,
        this.detalhes = detalhes
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

function agendarPasseio() {
    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let roteiro = document.getElementById('roteiro')
    let date = document.getElementById('date')
    let number = document.getElementById('number')
    let turno = document.getElementById('turno')
    let detalhes = document.getElementById('detalhes')

    let agendar = new Passeio(
        name.value,
        lastname.value,
        phone.value,
        email.value,
        roteiro.value,
        date.value,
        number.value,
        turno.value,
        detalhes.value
    )

    if(agendar.validarDados()) {
        document.getElementById('modal_titulo').innerHTML = 'Concluído'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-reserva-sucesso-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Passeio agendado com sucesso!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-reserva-conteudo-sucesso'
        document.getElementById('modal_btn').innerHTML = 'Concluído'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-reserva-sucesso-footer'
        document.getElementById('modal_btn').className = 'btn btn-reserva-sucesso'
        $('#modalEnviarFormulario').modal('show')
        name.value = ''
        lastname.value = ''
        phone.value = ''
        email.value = ''
        roteiro.value = ''
        date.value = ''
        number.value = ''
        turno.value = ''
        detalhes.value = ''
    } else {
        document.getElementById('modal_titulo').innerHTML = 'Erro'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-reserva-erro-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Preencha todos os campos!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-reserva-conteudo-erro'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-reserva-erro-footer'
        document.getElementById('modal_btn').className = 'btn btn-reserva-erro'
        $('#modalEnviarFormulario').modal('show')
    }
}