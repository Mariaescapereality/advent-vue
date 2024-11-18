// app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Mock data for each day's surprise
const surprises = [
  { id: 1, date: '2024-11-14', content: 'Crois en la magie de la saison ! 🌟' },
  { id: 2, date: '2024-12-02', content: 'Un feu de cheminée chaleureux avec des chaussettes accrochées, ajoutant une ambiance festive.' },
  { id: 3, date: '2024-12-03', content: 'Biscuits en pain d\'épices classiques' },
  { id: 4, date: '2024-12-04', content: 'Le savais-tu ? "Jingle Bells" a été écrit à l\'origine pour Thanksgiving !' },
  { id: 5, date: '2024-12-05', content: 'Chéris les moments passés en famille et entre amis - c\'est ce qui compte vraiment.' },
  { id: 6, date: '2024-12-06', content: 'Écris trois choses pour lesquelles tu es reconnaissant(e) aujourd\'hui.' },
  { id: 7, date: '2024-12-07', content: 'Un paysage enneigé avec un pin solitaire, créant une scène hivernale sereine.' },
  { id: 8, date: '2024-12-08', content: 'Décore un coin de ta maison avec quelque chose de festif. 🎄' },
  { id: 9, date: '2024-12-09', content: 'Chocolat chaud avec des guimauves et des bâtons de menthe.' },
  { id: 10, date: '2024-12-10', content: 'Partage la gentillesse aujourd\'hui - un petit geste peut égayer la journée de quelqu\'un.' },
  { id: 11, date: '2024-12-11', content: 'Un GIF animé de neige tombant doucement.' },
  { id: 12, date: '2024-12-12', content: 'Écris un message pour toi-même avec un objectif pour l\'année prochaine.' },
  { id: 13, date: '2024-12-13', content: 'En Islande, les livres sont échangés la veille de Noël et les familles passent la nuit à lire.' },
  { id: 14, date: '2024-12-14', content: 'Beignets au sucre à la cannelle - parfaits pour les matins de fête.' },
  { id: 15, date: '2024-12-15', content: 'Apprécie les moments de calme. Ils sont en eux-mêmes un cadeau.' },
  { id: 16, date: '2024-12-16', content: 'Un gros plan des lumières de Noël scintillant dans l\'obscurité.' },
  { id: 17, date: '2024-12-17', content: 'Crée une playlist de fête avec tes chansons préférées.' },
  { id: 18, date: '2024-12-18', content: 'La première carte de Noël a été créée en 1843 par Sir Henry Cole.' },
  { id: 19, date: '2024-12-19', content: 'Cidre chaud - épicé avec de la cannelle, des clous de girofle et des zestes d\'orange.' },
  { id: 20, date: '2024-12-20', content: 'Pense à une petite façon d\'aider quelqu\'un cette saison.' },
  { id: 21, date: '2024-12-21', content: 'Envoie une carte manuscrite à quelqu\'un avec qui tu n\'as pas parlé depuis longtemps.' },
  { id: 22, date: '2024-12-22', content: 'Biscuits de Noël avec glaçage coloré et paillettes.' },
  { id: 23, date: '2024-12-23', content: 'Que ton cœur soit aussi rempli que ta maison d\'amour et de rire.' },
  { id: 24, date: '2024-12-24', content: 'Fais une courte promenade aujourd\'hui et respire l\'air d\'hiver.' },
  { id: 25, date: '2024-12-25', content: 'Une table de dîner festive avec des bougies et des décorations de fête.' },
  { id: 26, date: '2024-12-26', content: 'Lait de poule - une boisson crémeuse et épicée classique des fêtes.' },
  { id: 27, date: '2024-12-27', content: 'Emballe un cadeau pour quelqu\'un - même un petit geste de reconnaissance compte !' },
  { id: 28, date: '2024-12-28', content: 'Garde l\'esprit de générosité toute l\'année.' },
  { id: 29, date: '2024-12-29', content: 'Feux d\'artifice illuminant le ciel nocturne, symbolisant la nouvelle année.' },
  { id: 30, date: '2024-12-30', content: 'Réfléchis à cette année. Écris une leçon que tu as apprise.' },
  { id: 31, date: '2024-12-31', content: 'Welcome the New Year with hope and joy!' },
];

// Route to get all surprises
app.get('/api/surprises', (req, res) => {
  res.json(surprises);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
