class Rectangle {

    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // get width() {
    //     return this._width;
    //   }
    
      set width(newWidth) {
        if (newWidth > 0) {
          this._width = newWidth;
        } else {
          console.log("Largura deve ser positiva");
        }
      }
    
    //   get height() {
    //     return this._height;
    //   }
    
      set height(newHeight) {
        if (newHeight > 0) {
          this._height = newHeight;
        } else {
          console.log("Altura deve ser positiva");
        }
      }
  }
  
  const retangulo = new Rectangle(10, 20);

  console.log(retangulo.width)
  console.log(retangulo.height)

//   console.log(retangulo.width)
//   console.log(retangulo.height) ..assim da certo tb

//o _ é pra não chamar o setter e nao criar um loop infinito