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

module.exports = {
  dummy,
  totalLikes
}