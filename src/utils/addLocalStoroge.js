export const addFavoriteFn = (item) => {
  let getFavoriteArr = localStorage.getItem('myFavorite')

  if (!getFavoriteArr) {
    console.log('아오짜증나', !getFavoriteArr)
    localStorage.setItem('myFavorite', JSON.stringify([]))
  }

  getFavoriteArr = JSON.parse(getFavoriteArr)
  getFavoriteArr.push(item)
  getFavoriteArr = new Set(getFavoriteArr)
  getFavoriteArr = Array.from(getFavoriteArr)
  console.log(getFavoriteArr, '최고다?')
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
