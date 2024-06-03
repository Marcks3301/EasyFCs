const input_cpf = document.getElementById('input_cpf')
const input_senha = document.getElementById('input_senha')

function Login() {
    if(input_cpf.value.trim() != '' && input_senha.value.trim() != '' && input_cpf.value.length > 13) {
        location.href = 'jogos.html'
    } else {
        alert('Preencha todos os campos.')
    }
}

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


