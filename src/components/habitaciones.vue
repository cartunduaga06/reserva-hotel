<template>
  <div v-if="result" class="content">
    <p> Nombre: {{result.nombre}}</p>
    <p>Tipo: {{result.tipo}}</p>
    <p>Caracteristicas: {{result.caracteristicas}}</p>
  </div>
</template>


<script>
import axios from "axios";
export default {
    data: () => ({
        result: null
    }),
  created() {
    axios.get("http://127.0.0.1:8000/habitaciones/1").then((result) => {
      this.result = result.data;
    })
  }
};
</script>

