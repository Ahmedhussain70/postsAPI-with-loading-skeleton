const grid = document.querySelector('.grid')
const cardTemplate = document.getElementById('card-template')
// var image = document.querySelector('image')
for (let i = 0; i < 12; i++) {
  grid.append(cardTemplate.content.cloneNode(true))
}

// fetch('https://jsonplaceholder.typicode.com/posts')
fetch('https://jsonplaceholder.typicode.com/photos')
  .then((res) => res.json())
  .then((posts) => {
    grid.innerHTML = ''
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true)
      div.querySelector('[data-title]').textContent = post.title
    //   div.querySelector('[data-body]').textContent = post.body
      div.querySelector('[image]').src = `${post.thumbnailUrl}`
      grid.append(div)
    })
  })