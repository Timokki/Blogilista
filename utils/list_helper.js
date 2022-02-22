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

const mostBlogs = (blogs) => {
  const bloggers = []
  let bloggersIndex = -1

  blogs.forEach(element => {
    bloggersIndex = bloggers.findIndex(item => item.author === element.author)
    //console.log("forEach bloggersIndex: ", bloggersIndex)
    if (bloggersIndex === -1)
    {
      console.log("bloggers.push: ", element.author)
      const bloggaaja = {
        author: element.author,
        totalBlogs: 1 
      }
      bloggers.push(bloggaaja)
    }
    else bloggers[bloggersIndex].totalBlogs += 1
  })

  bloggers.sort((a, b) => b.totalBlogs - a.totalBlogs)
  console.log("Sorted bloggers in mostBlogs: ", bloggers)
  return bloggers[0]
}

const mostLikes = (blogs) => {
  const bloggers = []
  let bloggersIndex = -1

  blogs.forEach(element => {
    bloggersIndex = bloggers.findIndex(item => item.author === element.author)
    console.log("forEach bloggersIndex: ", bloggersIndex)
    if (bloggersIndex === -1)
    {
      console.log("bloggers.push: ", element.author)
      const bloggaaja = {
        author: element.author,
        totalLikes: element.likes 
      }
      bloggers.push(bloggaaja)
    }
    else bloggers[bloggersIndex].totalLikes += element.likes
  })

  bloggers.sort((a, b) => b.totalLikes - a.totalLikes)
  console.log("Sorted bloggers: ", bloggers)
  return bloggers[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}