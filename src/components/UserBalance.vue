<template>
  <form id="app"  @submit.prevent="created">
    <ul>
    <li> <label class="label" for="task">Nueva Habitación:</label> 
    
    <input type="text" v-model="newTask" id="task" /> 
    </li>
    <li>
    <label class="label" for="tipo"> Tipo:</label>
    <input type="text" v-model="newTask1" id="task1" />
    </li>
    <li>
    <label class="label" for="numero"> Numero:</label>
    <input type="text" v-model="newTask2" id="task2" />
    </li>
    <li>
    <label class="label" for="descripcion"> descripcion:</label>
    <input type="text" v-model="newTask3" id="task3" />
    </li>
    <li>
    <label class="label" for="caracteristicas"> caracteristicas:</label>
    <input type="text" v-model="newTask4" id="task4" />
    </li>
    <br>

    <li>
    <input type="submit" value="Crear Habitación" />
    </li>
    </ul>
    <ul>
      <li v-for="(task, i) in tasks" :key="'task' + i">{{task.text}}  <h3>  habitacion creada </h3> </li>
     
    </ul>
  </form>
</template>

<script>
export default {
 data: () => ({
    nombre: "",
    tipo: "",
    numero: 0,
    descripcion: "",
    caracteristicas: "",
    precio: 0
  }),
  
  methods: {
    
   async created() {
  let post = {
    nombre: "otra",
    tipo: "Doble",
    numero: 11,
    descripcion: "Vista al mar",
    caracteristicas: "1 cama doble 2 sencillas 2  baños",
    precio: 200000
  };
  axios.post("http://127.0.0.1:8000/habitaciones", post).then((result) => {
    console.log(result);
  });
}


  }
};




</script>
<style scoped>
.task-list {
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
}
.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0,0,0,0.25);
  margin-top: 10px;
}
.label {
  display: block;
  margin-bottom: 10px;
}
.input {
  height: 35px;
}
.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  background-color: #2ecc71;
  color: #ecf0f1;
  cursor: pointer
}
.list {
  margin-top: 40px;
}
.task {
  cursor: pointer;
  margin: 10px 0;
}
.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>