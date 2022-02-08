/*  MANDATORY JS EXERCISES (create a different file for this exercise)
    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"] 
    2) Create an unordered list using JavaScript and save it in a variable
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genre as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
 */

// 1

    let genres = [
        'Comedy',
        'Drama',
        'Romance',
        'Horror',
        'Sci-Fi',
        'Documentary'
    ]
    console.log(genres);

// 2 3 4 5 6

/* const createUl = function(array) {
    let unorderedLi = document.createElement('ul')

    for(let i =0; i<genres.length;i++) {
        let newList = document.createElement('li')
        newList.appendChild(document.createTextNode(genres[i]))
        unorderedLi.appendChild(newList)
    }

    return unorderedLi
}

document.getElementById("unordered-list").appendChild(ul) */

  const createUl = function() {
      const div = document.querySelector("unordered-list")
      const ul = document.createElement('ul')
      for (let i=0; genres.length; i++) {
          const li = document.createElement('li')
          li.innerText = genres[i]
          ul.appendChild(li)
      }
      div.appendChild(ul)
  }
  createUl()