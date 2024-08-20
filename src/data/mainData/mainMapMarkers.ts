type markersType = {
  id: number;
  position: [number, number];
  popupText: string;
};

const markers: markersType[] = [
  { id: 0, position: [55.7558, 37.6176], popupText: 'Москва' },
  { id: 1, position: [59.9343, 30.3351], popupText: 'Санкт-Петербург' },
  { id: 2, position: [56.8389, 60.6057], popupText: 'Екатеринбург' },
  { id: 3, position: [55.8304, 49.0661], popupText: 'Казань' },
  { id: 4, position: [55.1644, 61.4368], popupText: 'Челябинск' },
  { id: 5, position: [54.9893, 73.3682], popupText: 'Омск' },
  { id: 6, position: [56.3269, 44.0059], popupText: 'Нижний Новгород' },
  { id: 7, position: [55.0084, 82.9357], popupText: 'Новосибирск' },
];
export default markers;
