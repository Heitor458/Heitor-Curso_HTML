function pessoa(){
    this.idade = 0

    setInterval(() => {
      this.idade++
      console.log(this.idade);
        
    },0.1);
}
new pessoa