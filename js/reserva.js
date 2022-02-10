class Reserva {
    
    constructor(name, lastname, phone, email, cpf, hospedagem, check_in, check_out, numero_pessoas, numero_criancas, detalhes) {
        this.name = name,
        this.lastname = lastname,
        this.phone = phone,
        this.email = email,
        this.cpf = cpf,
        this.hospedagem = hospedagem,
        this.check_in = check_in,
        this.check_out = check_out,
        this.numero_pessoas = numero_pessoas,
        this.numero_criancas = numero_criancas,
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


function fazerReserva() {

    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let cpf = document.getElementById('cpf')
    let hospedagem = document.getElementById('hospedagem')
    let check_in = document.getElementById('check_in')
    let check_out = document.getElementById('check_out')
    let numero_pessoas = document.getElementById('numero_pessoas')
    let numero_criancas = document.getElementById('numero_criancas')
    let detalhes = document.getElementById('detalhes')

    let reservar = new Reserva (
        name.value,
        lastname.value,
        phone.value,
        email.value,
        cpf.value,
        hospedagem.value,
        check_in.value,
        check_out.value,
        numero_pessoas.value,
        numero_criancas.value,
        detalhes.value
    )

    if(reservar.validarDados()){
        document.getElementById('modal_titulo').innerHTML = 'Concluído'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-reserva-sucesso-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Reserva feita com sucesso!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-reserva-conteudo-sucesso'
        document.getElementById('modal_btn').innerHTML = 'Concluído'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-reserva-sucesso-footer'
        document.getElementById('modal_btn').className = 'btn btn-reserva-sucesso'
        $('#modalFazerReserva').modal('show')
        name.value = ''
        lastname.value = ''
        phone.value = ''
        email.value = ''
        cpf.value = ''
        hospedagem.value = ''
        check_in.value = ''
        check_out.value = ''
        numero_pessoas.value = ''
        numero_criancas.value = ''
        detalhes.value = ''
    } else {
        document.getElementById('modal_titulo').innerHTML = 'Erro'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-reserva-erro-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Preencha os dados corretamente!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-reserva-conteudo-erro'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-reserva-erro-footer'
        document.getElementById('modal_btn').className = 'btn btn-reserva-erro'
        $('#modalFazerReserva').modal('show')
    }
}