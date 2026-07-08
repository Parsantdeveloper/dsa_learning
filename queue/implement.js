
  class MyQueue{

      constructor(){
        this.q={};
        this.front=0;
        this.back =0
      }

      push(x){
         this.q[this.back++]=x;
      }

      pop(x){
        if(this.empty())return null ;
        let val = this.q[this.front];
        delete this.q[this.front++];
        return val;
      }

      peek(x){
        return this.q[this.front];
      }

      empty(x){
       return this.front===this.back;
      }
  }