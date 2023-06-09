/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('memes').del()
  await knex('memes').insert([
    { id: 1, image: './images/image1.jpg' },
    { id: 2, image: './images/image2.jpg' },
    { id: 3, image: './images/image3.jpg' },
    { id: 4, image: './images/image4.jpg' },
    { id: 5, image: './images/image5.jpg' },
    { id: 6, image: './images/image6.jpg' },
    { id: 7, image: './images/image7.jpg' },
    { id: 8, image: './images/image8.jpg' },
    { id: 9, image: './images/image9.jpg' },
    { id: 10, image: './images/image10.jpg' },
    { id: 11, image: './images/image11.jpg' },
    { id: 12, image: './images/image12.jpg' },
    { id: 13, image: './images/image13.jpg' },
    { id: 14, image: './images/image14.jpg' },
    { id: 15, image: './images/image15.jpg' },
  ])
}
