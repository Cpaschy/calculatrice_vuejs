var app = new Vue ({
  el: '#app',
  data:{
      auteur:'By Charvey Paschy',
      a:'',
      car:'1234567890[]()+-.*,/',
      i: '',
      tonne: null,
      result:''
  },
  methods: {
    verification(entree){
      for (this.i === null; this.i < entree.length; this.i++ )
       if (this.car.indexOf(entree.charAt(this.i))<0 ){
          return false;}
      else {return true;}
    },
      calcul(){
        if (verification(entree))
        {
         this.a = eval(this.result);
        this.result = this.a;
      }
      },
      add(characteres) {
        this.result += characteres;
      },
      special_function(fonction) {
      if (verification(entree)) {
        if(fonction == "sqrt") {
          this.a = eval(this.result);
          this.result = Math.sqrt(this.a);
        }
        if(fonction == "pow") {
          this.a = eval(this.result);
          this.result = this.a * this.a;
        }
        if(fonction == "log") {
          this.a = eval(this.result);
          this.result = Math.log(this.a);
        }
     } else {this.result = 0;}
    },
    renit(){
      this.result= '';
    },
    massConverter() {
      return this.tonne / 1000000
    },  
  }
})