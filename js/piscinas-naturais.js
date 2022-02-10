class Reserva {

    constructor(name, lastname, phone, email, area, date, number, idade_criancas, detalhes){
        this.name = name,
        this.lastname = lastname,
        this.phone = phone,
        this.email = email,
        this.area = area,
        this.date = date,
        this.number = number,
        this.idade_criancas = idade_criancas,
        this.detalhes = detalhes
    }

    validarDados(){
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

function fazerReserva() {
    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let area = document.getElementById('area')
    let date = document.getElementById('date')
    let number = document.getElementById('number')
    let idade_criancas = document.getElementById('idade_criancas')
    let detalhes = document.getElementById('detalhes')

    let reservar = new Reserva (
        name.value,
        lastname.value,
        phone.value,
        email.value,
        area.value,
        date.value,
        number.value,
        idade_criancas.value,
        detalhes.value
    )

    if(reservar.validarDados()) {
        document.getElementById('modal_titulo').innerHTML = 'Concluído'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-reserva-sucesso-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Passeio marcado com sucesso!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-reserva-conteudo-sucesso'
        document.getElementById('modal_btn').innerHTML = 'Concluído'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-reserva-sucesso-footer'
        document.getElementById('modal_btn').className = 'btn btn-reserva-sucesso'
        $('#modalEnviarFormulario').modal('show')
        name.value = ''
        lastname.value = ''
        phone.value = ''
        email.value = ''
        area.value = ''
        date.value = ''
        number.value = ''
        idade_criancas.value = ''
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