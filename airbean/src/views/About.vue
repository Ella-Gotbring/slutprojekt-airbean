<template>
  <div class="about">
     <header>
    <!-- <img src="@/assets/graphics/graphics-header.svg" alt="header" class="header"> -->
    <MenuList v-bind:nav="visible" v-on:closeNav="navClose" />
    <Navicon  class="icon" v-bind:nav="visible" v-on:openNav="navOpen" />
   </header>
    <section class="articel">
    <h1>Vårt Kaffe</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing  <br>
       Obcaecati, ex! Quo, enim harum! Vel aperiam quidem ipsa <br>
        eaque molestiae corporis voluptatem temm,r sit amet. <br>
         redae repellendus amet laborum cupiditate! <br> </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Aperiam voluptatibus, repellat numquam pariatur delectus dolore
         velit ldio eos minima. Quis ipsam exercitationem 
         doloremque nisi, essesentium exercitationem perferendis,
         des ut dolores iusto possimus. Illo, enim incidunt. <br>
         Natus ae dolorem autem harum consequuntur voluptatum in,
         provident ipsa tenetur ullam totam placeat laborum eum maiores 
         optio excepturi architeil incidunt. Id, reprehenderit obcaecati
         provident aperiam excepturi ex at rum saepe labore voluptas 
         asperiores voluptatum ut quos expedita quo! repellat harum
         quibusdam quaerat illo obcaecati tempora unde voluptatum 
         ionem dignissimos, consequatur aspernatur corrupti repel
         veritatis mollitia vel doloribus blanditiis facilis dol</p> 
         </section>
         <section class="profile"> 
     <img src="@/assets/graphics/eva-cortado.jpg" alt="eva" class="eva">
     <h2>Eva Cortado</h2>
     <h4>VD & Grundare</h4>
     </section> 
     <footer>
        <!-- <img src="@/assets/graphics/graphics-footer.svg" alt="footer" class="footer"> -->
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
   max-width: 480px;
   padding:2.5rem 1.3rem;
   background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
   background-position: top center, bottom center;
   background-repeat: no-repeat, no-repeat;
   background-size: 100%, 100%;
   text-align: center;
   background-color: rgb(228, 207, 214);
}
.header{
  margin-top:-30px;
}
/* .articel{
   padding:20px;
}
.profile{
margin-left:220px;
} */
h1{
   font-size: 40px;
   margin: 1rem 0;
}
p{
   /* /* padding:10px;
   margin-bottom:5px; */
   line-height: 26px; 
}
h2{
   margin: 1rem 0;
}
h3{
      line-height: 26px; 
}
.eva{
   border-radius: 50%;
}

</style>
