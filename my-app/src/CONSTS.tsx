export const FILTERS = {
  sort: {
    popular: "popular",
    price: "price",
    capacity: "capacity",
  },
  functions: {
    addWash: "addwash",
    aiPanel: "aiPanel",
    inverterMotor: "inverterMotor",
    screen: "screen",
  },
  energyClass: {
    classA: "A",
    classB: "B",
    classD: "C",
  },
  capacity: {
    small: "8",
    medium: "9",
    large: "10.5",
  },
};

export const TEXTS = {
  header: "Wybierz urządzenie",
  sort: "Sortuj po:",
  functions: "Funkcje:",
  energyClass: "Klasa energetyczna:",
  capacity: "Pojemność:",
  numOfItems: "Liczba wyników:",
};

export const PRODUCTS = [
  {
    code: "WW90T754ABT",
    type: "Pralka AI QuickDrive™",
    capacity: "9",
    color: "Biała",
    dimensions: "55 x 60 x 85 cm",
    filters: {
      addWash: true,
      aiPanel: true,
      inverterMotor: true,
      screen: true,
    },
    functions: {
      addWash: "AddWash™",
      aiPanel: "Panel AI Control",
      inverterMotor: "Silnik inverterowy",
      screen: "Wyświetlacz elektroniczny",
    },
    energyClass: "A",
    priceDate: "15.09.2022 - 21.09.2022",
    price: { zł: "3199", gr: "00", currency: "zł" },
  },
];
