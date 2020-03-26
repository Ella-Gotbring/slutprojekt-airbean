<template>
  <div class="about">
     <header>
    <img src="@/assets/graphics/graphics-header.svg" alt="header" class="header">
    <MenuList v-bind:nav="visible" v-on:closeNav="navClose" />
    <Navicon  class="icon" v-bind:nav="visible" v-on:openNav="navOpen" />
   </header>
    <section class="articel">
    <h1>Vårt Kaffe</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing  <br>
       Obcaecati, ex! Quo, enim harum! Vel aperiam quidem ipsa porro hffdbcj lsfökjsef lkehn eöoujhaef <br>
        eaque molestiae corporis voluptatem temporibus hic voluptatum,Lorem ipsum dolor sit amet. <br>
         recusandae repellendus amet laborum cupiditate! <br> </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Aperiam voluptatibus, repellat numquam pariatur delectus dolore
         velit libero ullam odio eos minima. Quis ipsam exercitationem 
         doloremque nisi, esse ipsa! Praesentium exercitationem perferendis,
         debitis ut dolores iusto possimus. Illo, enim incidunt. <br>
         Natus repudiandae dolorem autem harum consequuntur voluptatum in,
         provident ipsa ab quae tenetur ullam totam placeat laborum eum maiores 
         optio excepturi architecto quo nihil incidunt. Id, reprehenderit obcaecati
         provident aperiam excepturi ex at sed et, earum saepe labore voluptas 
         asperiores voluptatum ut quos expedita quo! Inventore in repellat harum
         quibusdam quaerat illo obcaecati tempora unde voluptatum iste exercitat
         ionem dignissimos, consequatur aspernatur corrupti repellendus dolores
         veritatis mollitia vel doloribus blanditiis facilis doloremque recusandae</p> 
         </section>
         <section class="profile"> 
     <img src="@/assets/graphics/eva-cortado.jpg" alt="eva" class="eva">
     <h2>Eva Cortado</h2>
     <h4>VD & Grundare</h4>
     </section> 
     <footer>
        <img src="@/assets/graphics/graphics-footer.svg" alt="footer" class="footer">
     </footer>
  </div>
</template>
<script>
import Navicon from './../components/Navicon';
import MenuList from './../components/MenuList';


export default {
   name:'About',
   data() {
    return {
      visible: true,
    }
   },
   components:{
      Navicon,
      MenuList
   },
    methods:{
    navOpen() {
      this.visible = false;
    },
    navClose() {
      this.visible = true;
    }
    }
}
</script>
<style scoped>
.about{
   height: 100%;
   width: 500px;
   margin-left: 350px;
   text-align: left;
   background-color: rgb(228, 207, 214);
}
.header{
   width: 100%;
   height: 150px;
}
.articel{
   padding:20px;
}
.profile{
margin-left:220px;
}
h1{
   font-size: 50px;
}
p{
   padding:10px;
   margin-bottom:5px;
   line-height: 25px;
}
.eva{
   border-radius: 50%;
}
.footer{
   width: 100%;
   display: absolute;
   height: 97px;
}

</style>
