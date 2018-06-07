export default class singer {
  //对象的结构赋值
  constructor({id,name}){
    this.id = id
    this.name = name
    this.avatar =  `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
