const typeDefBook = `
type Mutation {
  createBook(book:inputBook!): responseBook
}

type Book {
  title: String
  author: String
}
 input inputBook{
  title: String
  author: String
  createdBy: ID
 }
type responseBook {
  status: Int!
  createdOn:String!
  createdBy: ID
  dataResponse: Book
  messageResponse:String
}
`;


const resolverBook = {
  Mutation: {
    createBook: (_, book) =>{
      console.log(book)
      return {
        status:200,
        createdOn:new Date(),
        createdBy:0,
        dataResponse:{
          title:"",
          author:""
        },
        messageResponse:""
      }
    } ,
  },
};

export  {resolverBook, typeDefBook};