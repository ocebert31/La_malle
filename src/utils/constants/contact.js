export const contactStatuses = [
  { label: '', icon: '🌀' },
  { label: 'En attente', icon: '⏳' },
  { label: 'Acceptée', icon: '✅' },
  { label: 'Rejetée', icon: '❌' },
  { label: 'En cours', icon: '⚡' }
];

export const contactStatusColors = {
  "En attente": "bg-yellow-100 text-yellow-800",
  "Acceptée": "bg-green-100 text-green-800",
  "Rejetée": "bg-red-100 text-red-800",
  "En cours": "bg-blue-100 text-blue-800",
};

export const urgencyStatuses = ['', 'Faible', 'Moyenne', 'Élevée'];

export const urgencyColors = {
  '': 'bg-gray-200 text-gray-700',
  'Faible': 'bg-green-400 text-white',
  'Moyenne': 'bg-yellow-400 text-white',
  'Élevée': 'bg-red-500 text-white'
};
