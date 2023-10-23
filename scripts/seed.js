const { faker } = require('@faker-js/faker/locale/pt_BR');
// node save file on disk
const fs = require('fs');

function generateCategory() {
  return {
    type: 'categories',
    id: faker.string.uuid(),
    name: faker.commerce.department(),
    is_active: faker.datatype.boolean(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
  };
}

function generateCastMember() {
  return {
    type: 'cast_members',
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    type: faker.number.int({ min: 1, max: 2 }),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
  };
}
const genres = [
  'Ação',
  'Romance',
  'Terror',
  'Aventura',
  'Comédia',
  'Drama',
  'Ficção Científica',
];
function generateGenre() {
  const genreName = faker.helpers.arrayElement(genres); // Pick a random genre from the genres arra
  // remove duplicate genres

  return {
    type: 'genres',
    id: faker.datatype.uuid(),
    name: genreName,
    is_active: faker.datatype.boolean(),
    categories: Array.from({ length: 3 }, () => generateCategory()),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
  };
}

function generateVideo() {
  const thumbFiles = ['explained',''];
  return {
    type: 'movies',
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(3),
    description: faker.lorem.paragraph(),
    yearLaunched: faker.date
      .between(new Date(1895, 0, 1), new Date())
      .getFullYear(),
    opened: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement(['G', 'PG', 'PG-13', 'R', 'NC-17']),
    duration: faker.datatype.number({ min: 60, max: 180 }),
    genres: Array.from({ length: 2 }, () => generateGenre().name),
    categories: Array.from({ length: 2 }, () => generateCategory().name),
    castMembers: Array.from({ length: 4 }, () => generateCastMember().name),
    thumbFileURL: faker.image.imageUrl(682, 384, 'spiderman', true),
    bannerFileURL: faker.image.imageUrl(1200, 450, 'spiderman', true),
    bannerHalfFileURL: faker.image.imageUrl(600, 225, 'spiderman', true),
    trailerFileURL: `${faker.internet.domainName()}.mp4`,
    videoFileURL: `${faker.internet.domainName()}.mp4`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

function generateMockListResponse(
  generateItemFn = () => {},
  length = faker.number.int({ min: 1, max: 10 })
) {
  const items = Array.from({ length }, () => generateItemFn());
  // get first item to generate path aka videos, genres, categories, cast_members
  const { type } = items[0];

  const path = `http://localhost:3333/${type}`;

  return items;
}

// Usage example
const mockVideoListResponse = generateMockListResponse(generateVideo, 20);
const mockGenreListResponse = generateMockListResponse(generateGenre, 10);
const mockCategoryListResponse = generateMockListResponse(generateCategory, 10);
const mockCastMemberListResponse = generateMockListResponse(
  generateCastMember,
  10
);

// Save db.json file
const db = {
  movies: mockVideoListResponse,
  genres: mockGenreListResponse,
  categories: mockCategoryListResponse,
  cast_members: mockCastMemberListResponse,
};

fs.writeFile('db.json', JSON.stringify(db), function (err) {
  if (err) return console.log(err);
  console.log('Mock database > db.json');
});
