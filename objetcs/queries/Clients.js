const typeDefClient = `
type Query {
  getClient: [Client]
}

type Client {
  id:ID
  name: String
  age: String
}
`;


const resolverClient = {
  Query: {
    getClient: () =>{
      return [{
        name:"La ridicula idea de no volver a verte",
        age: "Rosa Montero"
      }]
    } ,
  },
};

export  {typeDefClient, resolverClient};