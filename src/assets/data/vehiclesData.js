import BMW228iGranCoupe from "../images/2022-bmw-gran-coupe.png";
import rangeRowerSport from "../images/2022-range-rover-sport.png";
import audiA8 from "../images/2023-audi-a8.png";
import chevroletTahoe from "../images/2023-chevrolet-tahoe.png";
import nissanMaxima from "../images/2023-nissan-maxima.png";
import mercedesBenzSL from "../images/2022-mercedes-benz-sl.png";

const vehiclesData = [
  {
    name: "BMW 228i Gran Coupe",
    price: 220,
    rating: 9.5,
    imgSource: `${BMW228iGranCoupe}`,
    details: [
      { label: "Model", value: "228i" },
      { label: "Brand", value: "BMW" },
      { label: "Year", value: "2022" },
      { label: "Doors", value: "4/5" },
      { label: "Transmission", value: "Manual" },
      { label: "Fuel", value: "Gasoline" },
    ],
  },
  {
    name: "Range Rover Sport",
    price: 190,
    rating: 8.8,
    imgSource: `${rangeRowerSport}`,
    details: [
      { label: "Model", value: "Sport" },
      { label: "Brand", value: "Range Rover" },
      { label: "Year", value: "2022" },
      { label: "Doors", value: "4/5" },
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
    ],
  },
  {
    name: "Audi A8",
    price: 240,
    rating: 9.1,
    imgSource: `${audiA8}`,
    details: [
      { label: "Model", value: "A8" },
      { label: "Brand", value: "Audi" },
      { label: "Year", value: "2023" },
      { label: "Doors", value: "4/5" },
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Gasoline" },
    ],
  },
  {
    name: "Chevrolet Tahoe",
    price: 200,
    rating: 8.9,
    imgSource: `${chevroletTahoe}`,
    details: [
      { label: "Model", value: "Tahoe" },
      { label: "Brand", value: "Chevrolet" },
      { label: "Year", value: "2023" },
      { label: "Doors", value: "4/5" },
      { label: "Transmission", value: "Manual" },
      { label: "Fuel", value: "Diesel" },
    ],
  },
  {
    name: "Nissan Maxima",
    price: 160,
    rating: 8.6,
    imgSource: `${nissanMaxima}`,
    details: [
      { label: "Model", value: "Maxima" },
      { label: "Brand", value: "Nissan" },
      { label: "Year", value: "2023" },
      { label: "Doors", value: "4/5" },
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Gasoline" },
    ],
  },
  {
    name: "Mercedes-Benz SL",
    price: 230,
    rating: 9.7,
    imgSource: `${mercedesBenzSL}`,
    details: [
      { label: "Model", value: "SL" },
      { label: "Brand", value: "Mercedes-Benz" },
      { label: "Year", value: "2022" },
      { label: "Doors", value: "2/3" },
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Gasoline" },
    ],
  },
];

export default vehiclesData;
