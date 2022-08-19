let getFavoriteArr = localStorage.getItem('myFavorite')

if (!getFavoriteArr) {
  localStorage.setItem('myFavorite', JSON.stringify([]))
}
