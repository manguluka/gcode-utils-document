export default class Document {
  constructor(){
    this.blocks = [];
  }

  //Document helpers
  prepend(block){
    this.blocks.unshift(block)
    return this
  }

  append(block){
    this.blocks.push(block)
    return this
  }

  toString(sequenceNumbers = false){
    return this.blocks.join('\n')
  }

  //Gcode Operations
  rapid(x,y,z){
    this.append(`G0 X${x} Y${y} Z${z}`)
    return this
  }

  linear(x,y,z){
    this.append(`G1 X${x} Y${y} Z${z}`)
    return this
  }

  spindleOn(){
    return this.append(`M3`)
    return this
  }

  spindleOff(){
    this.append(`M5`)
    return this
  }
  spindleSpeed(speed){
    this.append(`S${speed}`)
    return this
  }

  linearX(x){
    this.append(`G1 X${x}`)
    return this
  }

  linearY(y){
    this.append(`G1 Y${y}`)
    return this
  }

  setRelativePositioning(){
    this.append('G91')
    return this
  }

}
