const typeDefBook = `
type Query {
  getBooks: [Book]
}

type Book {
  id:ID
  title: String
  author: String
}
`;


const resolverBook = {
  Query: {
    getBooks: () =>{
      return [{
        title:"La ridicula idea de no volver a verte",
        author: "Rosa Montero"
      }]
    } ,
  },
};

export  {resolverBook, typeDefBook};