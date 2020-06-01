const express = require('express')
const server = express()

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title:"Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title:"Exercicios",
    category: "Saude",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title:"Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/1156/1156268.svg",
    title:"karaoke",
    category: "Diversao em familia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2972/2972213.svg",
    title:"Pintura",
    category: "Criatividade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
    title:"Recortes",
    category: "Criatividade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa fugiat debitis et vitae amet voluptas vel nam vero! Inventore autem suscipit quam doloremque accusantium explicabo repellat libero perspiciatis temporibus",
    url: "https://rocketseat.com.br"
  }
]


server.use(express.static('public'))

const nunjucks = require('nunjucks')
nunjucks.configure('views', {
  express: server,
  noCache: true,
})

server.get('/', function(req, res){

  const reverseIdeas = [...ideas].reverse()
  let lastIdeas = []
  for (let idea of reverseIdeas) {
    if(lastIdeas.length < 2){
      lastIdeas.push(idea)
    }
  }



  return res.render('index.html', { ideas: lastIdeas })
})

server.get('/ideias', function(req, res){

  const reverseIdeas = [...ideas].reverse()



  return res.render('ideias.html', {ideas: reverseIdeas})
})


server.listen(3000)

