export const addFavoriteFn = (item) => {
  let getFavoriteArr = localStorage.getItem('myFavorite')

  if (!getFavoriteArr) {
    localStorage.setItem('myFavorite', JSON.stringify([]))
  }

  getFavoriteArr = JSON.parse(getFavoriteArr)
  getFavoriteArr.push(item)
  getFavoriteArr = new Set(getFavoriteArr)
  getFavoriteArr = Array.from(getFavoriteArr)
  localStorage.setItem('myFavorite', JSON.stringify(getFavoriteArr))
  console.log('ADDD!!!')
}

export const removeFavoriteFn = (item) => {
  let getFavoriteArr = localStorage.getItem('myFavorite')
  getFavoriteArr = JSON.parse(getFavoriteArr)
  getFavoriteArr = getFavoriteArr.filter((data) => data !== item)
  localStorage.setItem('myFavorite', JSON.stringify(getFavoriteArr))
  console.log('remove!!!')
}
