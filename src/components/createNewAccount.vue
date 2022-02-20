<template>
  <div class="col-sm-6 cenario">
    <div class="row">
      <div>
 
        

        <div v-if="views" class="card x">
          <div class="card-body">
            <div class="card-title text-center">
              <h6>Aderir ao Facebook</h6>
              <hr />

               <div>
                  <h1>Como te chamas?</h1>
                  <h6>Insere o nome que usas na vida real</h6>
               </div>
              
              <div class="row">

              
              <div class="col-6">
                <label for="name" class="mt-5">Nome próprio</label>
                   <input
                   v-model="nome"
                    type="text"
                    class="form-control"
                    id="name"
                    > 
                </div>

                <div class="col-6">
                  <label for="apelido" class="mt-5 text-center labelA">Apelido</label>
                   <input
                   v-model="apelido"
                    type="text"
                    class="form-control "
                    id="apelido"
                    > 
                </div>
                   
                   <div v-if="alert">
                   <div class="warning mt-1">
                     <span> Como te chamas?</span>
                   </div>
                   </div>
                
   
             </div>

             <div class="mt-2">
               <button @click="next()" class="btn btn-primary">Seguinte</button>
             </div>

            </div>
          </div>
        </div>

 



 
   <!--  -->
    <div v-if="loading1" class="card x mb-5">
          <div class="card-body">
            <div class="card-title text-center">
              <h6>Aderir ao Facebook</h6>
              <hr />

               <div>
                  <h1>Criar uma palavra-passe</h1>
                  <h6 class="mb-5">
                    Criar uma palavra-passe com, pelo menos,6 <br>
                    caracteres. Deve ser algo que as outras <br>
                    pessoas não consigam adivinhar
                  </h6>
               </div>
              
              <div class="row">
              <div class="col-12">
                   <input
                   v-model="passeword"
                    type="password"
                    class="form-control"
                    minlength="6"
                    maxlength="100"
                    > 
                </div>
                
   
             </div>

             <div class="mt-5">
               <button class="btn btn-primary">Seguinte</button>
             </div>

 
              
            </div>
          </div>
        </div>






        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inicio",
  data() {
    return {
        views: true, //coloca true depois
        alert: false,
        loading1: false ,
        nome:  "",
        apelido: "",
        passeword: ""
            
    };
      
  }, methods:{

     next(){
     if(this.nome == "" && this.apelido == ""){
            this.alert = true;
        } else if(this.nome != "" && this.apelido == ""){
            this.alert = true
        } else if(this.nome == "" && this.apelido != ""){
            this.alert = true;
        } else{
           this.alert = false;
           this.views = false
           this.loading1 = true
            
        }

      }
 
     

  }
};
</script>

<style scoped>
.card {
  height: 800px;
}

.x {
  background: rgba(78, 76, 76, 0.411);
  border: 0.1px solid gray;
}
 

h6,
label,
hr,
h1 {
  font-weight: 400;
  color: #fff;
}

.btn{
  width: 100%;
  font-weight: 600;
}
 

.labelA{
padding-right: 150px ;
}
input{
  background: rgba(128,128,128,0.1) ;
  border: solid 1px rgba(255,255,255,0.3);
  color: #fff;
}

.check{
  color: red;
  font-weight: 600;
}


input:hover{
  background: rgba(128,128,128,0.1) ;
  border: solid 1px rgba(255,255,255,0.3);
  color: #fff;
}

.warning{
  background: red;
  color: #fff;
  width: 100%;
}

a{
  text-decoration: none;
  font-weight: 700;
}

a:hover{
  background: rgba(128,128,128,0.1);
}

</style>