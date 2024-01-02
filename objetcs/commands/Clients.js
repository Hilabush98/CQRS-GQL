const typeDefClient = `
type Mutation {
  createClient(client:inputClient!): responseClient
}
input inputClient{
  name: String
  age: String
}
type Client {
  id:ID
  name: String
  age: String
}

type responseClient {
  status: Int!
  createdOn:String!
  createdBy: ID
  dataResponse:Client
  messageResponse:String
}
`;


const resolverClient = {
  Mutation: {
    createClient: (_, client) =>{
      console.log(client);
      return {
        status:200,
        createdOn: new Date(),
        createdBy:0,
        dataResponse:{
          employeeId:0,
          name:"",
          age:""
        },
        messageResponse:""
      }
    } ,
  },
};

export  {typeDefClient, resolverClient};