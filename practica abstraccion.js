class Persona {
    constructor(edad, nombre, telefono) {
      this._edad = edad;
      this._nombre = nombre;
      this._telefono = telefono;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(value) {
      this._edad = value;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(value) {
      this._nombre = value;
    }
  
    get telefono() {
      return this._telefono;
    }
  
    set telefono(value) {
      this._telefono = value;
    }
  }
  
  const persona = new Persona();
  persona.edad = 30;
  persona.nombre = 'John';
  persona.telefono = '5586-585-5254';
  
  console.log(persona.edad);
  console.log(persona.nombre);
  console.log(persona.telefono);