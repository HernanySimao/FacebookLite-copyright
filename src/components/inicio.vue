<template>
  <div class="col-sm-6 cenario">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div v-if="next" class="card text-center">
          <div class="card-body mt-5 mb-5">
            <div
              class="mt-5 mb-5 d-flex justify-content-center align-items-center"
            >
              <div class="imagem mt-5 mb-5">
                <div>
                  <v-img src="@/assets/facebook.png"> </v-img>
                </div>

                <div class="radios">
                  <input type="radio" id="a1" />
                  <input type="radio" id="a2" />
                  <input type="radio" id="a3" />
                  <input type="radio" id="a4" />
                  <input type="radio" id="a5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- inicio do card de login -->

      <div v-if="next == false">
        <div class="card x">
          <div class="card-body">
            <div class="card-title text-center">
              <h5>Facebook</h5>
              <hr />
            </div>

            <form>
              <div>
                <label for="email" class="mb-2"
                  >Número de telemóvel ou e-mail</label
                >
                <br />
                <input
                  v-model="name"
                  type="email"
                  placeholder="Digite o seu número"
                  class="form-control mb-1"
                  id="email"
                />
                <h6 v-if="checksEmail">Preencha o campo do e-mail</h6>
              </div>

              <div>
                <label for="passeword" class="mb-2">Palavra-passe</label> <br />
                <input
                  v-model="pass"
                  type="password"
                  placeholder="Digite a sua palavra-passse"
                  class="form-control"
                  id="passeword"
                />
                <h6 v-if="checksPass">Preencha o campo da palavra-passe</h6>
              </div>

              <div>
                <button
                  class="btn btn-primary btn-lg mt-3 mb-2"
                  type="button"
                  @click="checkInput"
                >
                  Iniciar sessão
                </button>

                <a href="#"> Não sabes a tua palavra-passe?</a>
              </div>

              <div class="mt-5">
                <div class="row">
                  <div class="col-4">
                    <hr class="smal" />
                  </div>

                  <div class="col-4 text-center">
                    <span>ou</span>
                  </div>

                  <div class="col-4">
                    <hr class="smal" />
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-success mt-5 btnE mb-5" type="button">
                  <router-link class="link" to="/createNewAccount">
                    Criar nova conta
                  </router-link>
                </button>
              </div>

              <div>
                <ul class="mt-5">
                  <li v-for="list in lists" :key="list.id">{{ list.title }}</li>
                </ul>
              </div>

              {{ $store.state.user.name }}
            </form>
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
      loading: 1,
      next: false,
      name: "",
      pass: "",
      checksEmail: false,
      checksPass: false,
      lists: [
        { id: 1, title: "Português (Portugal)" },
        { id: 2, title: "English (US)" },
        { id: 3, title: "Français (France)" },
        { id: 4, title: "Mais idiomas..." },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("a" + this.loading).checked = true;

      setTimeout(() => {
        this.loading = 2;
        document.getElementById("a" + this.loading).checked = true;
      }, 2000);

      setTimeout(() => {
        this.loading = 3;
        document.getElementById("a" + this.loading).checked = true;
      }, 3000);

      setTimeout(() => {
        this.loading = 4;
        this.next = false;
        document.getElementById("a" + this.loading).checked = true;
      }, 4000);
    }, 1000);
  },
  methods: {
    checkInput() {
      //enviando para o meu vuex
      this.$store.dispatch("hereName", this.name);
      //....

      if (this.name == "" && this.pass == "") {
        this.checksPass = true;
        this.checksEmail = true;
      } else if (this.name != " " && this.pass == "") {
        this.checksEmail = false;
        this.checksPass = true;
      } else if (this.name == "" && this.pass != "") {
        this.checksEmail = true;
        this.checksPass = false;
      } else {
        this.checksEmail = false;
        this.checksPass = false;
      }

      if (this.name.length < 5) {
      }
    },
  },
};
</script>

<style scoped>
.imagem {
  padding-top: 150px;
  width: 300px;
}

.card {
  height: 800px;
}

.x {
  background: rgba(78, 76, 76, 0.411);
  border: 0.1px solid gray;
}

input[type="radio"] {
  width: 20px;
  height: 30px;
  margin: 5px;
}

.btn {
  width: 100%;
  border-radius: 2px;
  font-weight: 600;
  color: #fff;
}
.btnE {
  width: 40%;
}

h5,
label,
hr,
span {
  font-weight: 400;
  color: #fff;
}

span {
  font-weight: 500;
  font-size: 20px;
}
.link {
  color: #fff;
}

a {
  text-decoration: none;
  font-weight: 600;
}

.smal {
  width: 110px;
}

li {
  list-style: none;
  color: rgb(0, 68, 255);
  font-weight: 400;
  cursor: pointer;
}

h6 {
  color: red;
}
</style>