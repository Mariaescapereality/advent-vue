<template>
  <div class="calendar">
    <!-- Loop through 31 days, each represented by a DayComponent -->
    <DayComponent
      v-for="day in 31"
      :key="day"
      :day="day"
      :surprise="surprises[day - 1]"
      @openSurprise="openSurprise"
    />
  </div>

  <!-- Modal for displaying the surprise content -->
  <div v-if="selectedSurprise" class="modal">
    <h2>Surprise for December {{ selectedDay }}</h2>
    <p>{{ selectedSurprise }}</p>
    <button @click="closeSurprise">Close</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DayComponent from './DayComponent.vue';

const surprises = ref([
  'Believe in the magic of the season! 🌟',  
  'A cozy image of a fireplace with stockings.', 
  'Recipe: Classic Gingerbread Cookies. Make the Gingerbread: Mix flour, brown sugar, baking soda, cinnamon, ginger, cloves, and salt in a large mixing bowl. Add chunks of butter and incorporate them with a pastry blender until the mixture resembles fine crumbs. Mix in the molasses and milk until combined. Refrigerate: Cover the dough in plastic wrap and refrigerate it for 2 hours or overnight. ',  
  'Fun fact: Did you know snowflakes are unique?', 
  'Challenge: Write down 3 things you are grateful for.',
  'An image of a beautifully decorated Christmas tree.', 
  'Un paysage enneigé avec un pin solitaire, créant une scène hivernale sereine.',
  'Décore un coin de ta maison avec quelque chose de festif. 🎄',
  'Chocolat chaud avec des guimauves et des bâtons de menthe.',
  'Partage la gentillesse aujourd\'hui - un petit geste peut égayer la journée de quelqu\'un.',
  'Un GIF animé de neige tombant doucement.',
  'Écris un message pour toi-même avec un objectif pour l\'année prochaine.',
  'En Islande, les livres sont échangés la veille de Noël et les familles passent la nuit à lire.',
  'Beignets au sucre à la cannelle - parfaits pour les matins de fête.',
  'Apprécie les moments de calme. Ils sont en eux-mêmes un cadeau.',
  'Un gros plan des lumières de Noël scintillant dans l\'obscurité.',
  'Crée une playlist de fête avec tes chansons préférées.',
  'La première carte de Noël a été créée en 1843 par Sir Henry Cole.',
  'Cidre chaud - épicé avec de la cannelle, des clous de girofle et des zestes d\'orange.',
  'Pense à une petite façon d\'aider quelqu\'un cette saison.',
  'Envoie une carte manuscrite à quelqu\'un avec qui tu n\'as pas parlé depuis longtemps.',
  'Biscuits de Noël avec glaçage coloré et paillettes.',
  'Que ton cœur soit aussi rempli que ta maison d\'amour et de rire.',
  'Fais une courte promenade aujourd\'hui et respire l\'air d\'hiver.',
  'Une table de dîner festive avec des bougies et des décorations de fête.',
  'Lait de poule - une boisson crémeuse et épicée classique des fêtes.',
  'Emballe un cadeau pour quelqu\'un - même un petit geste de reconnaissance compte !',
  'Garde l\'esprit de générosité toute l\'année.',
  'Feux d\'artifice illuminant le ciel nocturne, symbolisant la nouvelle année.',
  'Réfléchis à cette année. Écris une leçon que tu as apprise.',
  'Recipe: Hot Chocolate with Marshmallows.',
]);

const selectedSurprise = ref(null);
const selectedDay = ref(null);

const openSurprise = (day, surprise) => {
  selectedSurprise.value = surprise;
  selectedDay.value = day;
};

const closeSurprise = () => {
  selectedSurprise.value = null;
  selectedDay.value = null;
};
</script>

<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  max-width: 600px;
  margin: auto;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>
