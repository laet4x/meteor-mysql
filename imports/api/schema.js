export default typeDefs = [`
type Posts {
  id: Int
  content: String
  views: Int
}

type Query {
  posts(views: Int): [Posts]
}

schema {
  query: Query
}
`];
