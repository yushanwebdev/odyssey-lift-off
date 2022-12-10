const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Get all the Tracks for the home page"
        tracksForHome: [Track!]!
    }


    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "The id of the Track"
        id: ID!
        "The Track title"
        title: String!
        "The Track's main author"
        author: Author!
        "The Track's main images' URL"
        thumbnail: String
        "The Track length in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        "The id of the Author"
        id: ID!
        "The Author's first and last name"
        name: String!
        "The Author's profile picture"
        photo: String
    }
`;

module.exports = typeDefs;