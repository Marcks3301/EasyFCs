const input_cpf = document.getElementById('input_cpf')
const input_senha = document.getElementById('input_senha')
const input_telefone = document.getElementById('input_telefone')
const input_confirmar_senha = document.getElementById('input_confirmar_senha')

function formatPhone(phone) {
    phone = phone.replace(/\D/g, '')
    phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2')
    phone = phone.replace(/(\d)(\d{4})$/, '$1-$2')
    return phone
  }

  document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('input_telefone')
    
    phoneInput.addEventListener('input', function (e) {
      e.target.value = formatPhone(e.target.value)
    })
})

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2') 
    return cpf
  }

  document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('input_cpf')

    cpfInput.addEventListener('input', function (e) {
      e.target.value = formatCPF(e.target.value)
    })
  })

function Checar_Cadastro() {
    if(input_cpf.value.trim() != '' && input_senha.value.trim() != '' && input_cpf.value.length > 13 && input_telefone.value.trim() != '' && input_confirmar_senha.value.trim() != '') {
        if(input_senha.value == input_confirmar_senha.value) {
            location.href = 'login.html'
        } else {
            alert('Errou a senha Manezão')
        }
    } else {
        alert('Preencha todos os campos.')
    }
}