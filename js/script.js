document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#form')
  const input = document.querySelector('#input')
  const rate = document.querySelector('#rate')
  const cb = document.querySelector('#cb')
  const button = document.querySelector('#button')
  const list = document.querySelector('#list')
  const listItem = document.querySelectorAll('#list-item')
  const animeDB = [
    'Violet Evergarden (10)',
    'Tokyo Ghoul (8)',
    'Weathering With You (6)',
    'ReLife (9)',
    'Kakegurui (9)'
  ]

  animeDB.sort()
  display(animeDB, list)

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let newAnime = input.value
    let newRate = rate.value
    let newCB = cb

    if (newAnime && newRate) {
      if (newCB.checked) {
        newAnime = `*${newAnime}`
      }

      animeDB.push(`${newAnime} (${newRate})`)
      animeDB.sort()
      display(animeDB, list)
      event.target.reset()
    }
  })

  function display(dbName, loc) {
    loc.innerHTML = '<li class="list-group-item disabled" id="list-item" aria-disabled="true">Your anime list</li>'
    dbName.forEach((item, idx) => {
      loc.innerHTML += `
      <li class="list-group-item" id="list-item">
        ${idx + 1} ${mySub(item)}
      <button class="btn btn-outline-danger btn-sm" id="del">x</button></li>
      `
    })

    document.querySelectorAll('#del').forEach((item, idx) => {
      item.addEventListener('click', () => {
        item.parentElement.remove()
        animeDB.splice(idx, 1)
        display(dbName, loc)
      })
    })
  }

  function mySub(length) {
    if (length.length-4 > 18) {
      return `${length.substring(0, 18)}... ${length.slice(-3)}`
    } else {
      return length
    }
  }

})