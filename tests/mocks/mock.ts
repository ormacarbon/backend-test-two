const someBeers = [
  {
    id: "63ea7af34de734e83a709191",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description:
      "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    name: "Stone House Stout",
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com",
  },
  {
    id: "63ea7af34de734e83a709192",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description:
      "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    name: "Stone House Stout",
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com",
  },
  {
    id: "63ea7af34de734e83a709193",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description:
      "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    name: "Stone House Stout",
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com",
  },
  {
    id: "63ea7af34de734e83a709194",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description:
      "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    name: "Stone House Stout",
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com",
  },
];

const oneBeerWithId = {
  id: "63ea7af34de734e83a709194",
  abv: 8.918797384901016,
  address: "141 South Main Street",
  category: "British Ale",
  city: "Slippery Rock",
  coordinates: [41.0638, -80.0556],
  country: "United States",
  description:
    "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
  ibu: 104,
  name: "Stone House Stout",
  state: "Pennsylvania",
  website: "http://www.northcountrybrewing.com",
};
const oneBeerForUpdate = {
  id: "63ea7af34de734e83a709194",
  address: "141 North Main Street",
};

const oneBeerForUpdateWithoutId = {
  address: "141 North Main Street",
};

const oneBeerForUpdateWithoutUpdate = {
  id: "63ea7af34de734e83a709194",
};

const oneBeerWithoutIdUpdated = {
  abv: 8.918797384901016,
  address: "141 North Main Street",
  category: "British Ale",
  city: "Slippery Rock",
  coordinates: [41.0638, -80.0556],
  country: "United States",
  description:
    "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
  ibu: 104,
  name: "Stone House Stout",
  state: "Pennsylvania",
  website: "http://www.northcountrybrewing.com",
};
const oneBeerWithoutId = {
  abv: 8.918797384901016,
  address: "141 South Main Street",
  category: "British Ale",
  city: "Slippery Rock",
  coordinates: [41.0638, -80.0556],
  country: "United States",
  description:
    "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
  ibu: 104,
  name: "Stone House Stout",
  state: "Pennsylvania",
  website: "http://www.northcountrybrewing.com",
};

const beerWithoutAddress = {
  abv: 8.918797384901016,
  category: "British Ale",
  city: "Slippery Rock",
  coordinates: [41.0638, -80.0556],
  country: "United States",
  description:
    "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter. The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
  ibu: 104,
  name: "Stone House Stout",
  state: "Pennsylvania",
  website: "http://www.northcountrybrewing.com",
};

const idForDeleteBeer = {
  id: "63ea7af34de734e83a709194",
};

export default {
  someBeers,
  oneBeerWithId,
  oneBeerWithoutId,
  beerWithoutAddress,
  oneBeerWithoutIdUpdated,
  oneBeerForUpdate,
  oneBeerForUpdateWithoutId,
  oneBeerForUpdateWithoutUpdate,
  idForDeleteBeer,
};
