// Função auxiliar para imprimir no console do site
function logToTerminal(message) {
    const terminal = document.getElementById('console-output');
    const p = document.createElement('p');
    p.textContent = `> ${message}`;
    terminal.appendChild(p);
    terminal.scrollTop = terminal.scrollHeight;
  }
  
  // 1. Classe Base
  class Veiculo {
    constructor(marca, modelo, ano, elementId) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.elementId = elementId;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        this.atualizarStatusUI();
        logToTerminal(`${this.marca} ${this.modelo} ligado!`);
      } else {
        logToTerminal(`O veículo (${this.marca} ${this.modelo}) já está ligado.`);
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.atualizarStatusUI();
        logToTerminal(`${this.marca} ${this.modelo} desligado.`);
      } else {
        logToTerminal(`O veículo (${this.marca} ${this.modelo}) já está desligado.`);
      }
    }
  
    info() {
      const status = this.ligado ? "Ligado" : "Desligado";
      logToTerminal(`${this.ano} ${this.marca} ${this.modelo} - Status: ${status}`);
    }
  
    atualizarStatusUI() {
      const statusEl = document.getElementById(this.elementId);
      if (this.ligado) {
        statusEl.textContent = "Ligado";
        statusEl.className = "status ligado";
      } else {
        statusEl.textContent = "Desligado";
        statusEl.className = "status desligado";
      }
    }
  }
  
  // 2. Classes Filhas (Herança)
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas, elementId) {
      super(marca, modelo, ano, elementId);
      this.portas = portas;
    }
  
    info() {
      super.info();
      logToTerminal(`Número de portas: ${this.portas}`);
    }
  }
  
  class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas, elementId) {
      super(marca, modelo, ano, elementId);
      this.cilindradas = cilindradas;
    }
  
    info() {
      super.info();
      logToTerminal(`Cilindradas: ${this.cilindradas} cc`);
    }
  }
  
  // Instanciando os objetos
  const carro = new Carro("Toyota", "Corolla", 2022, 4, "status-carro");
  const moto = new Moto("Triumph", "Tiger sport 660", 2026, 660, "status-moto");