const dummy = (blogs) => {
  return 1
  //return blogs.length
}

const totalLikes = (blogs) => {
  
  const initial = 0
  const sumWithInitial = blogs.reduce( (previousValue, currentValue) => 
    previousValue + currentValue.likes, initial)
  return sumWithInitial
}

const favoriteBlog = (blogs) => {
  let currentFavoriteBlog

  blogs.forEach(element => {
    if (currentFavoriteBlog == null || element.likes > currentFavoriteBlog.likes) {
      currentFavoriteBlog = element;
    }
  })
  console.log('Current Favorite blog is: ', currentFavoriteBlog)
  return currentFavoriteBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}