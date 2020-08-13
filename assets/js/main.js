function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.pressionaEnter();
  }
    
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  // como só tem 1 linha não precisa das {}
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
  // aqui colocamos o foco no display pq se não quando pressionamos enter
  // ao invés de realizar a conta, ele add o ultimo valor que clicamos no teclado da calculadora
    this.display.focus();
  };

  this.clear = () => this.display.value = '';

  // slide de 0 a -1 remove o ultimo
  this.del = () => this.display.value = this.display.value.slice(0, -1);
  

  this.pressionaEnter= () => {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    })
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();