import Sequelize from 'sequelize';

// create the connection
const db = new Sequelize('apollodemo', "root", null, {
    host: 'localhost',
    dialect: 'mysql'
});

// define the model
const PostModel = db.define('posts', {
    content: { type: Sequelize.STRING },
    views: {type: Sequelize.INTEGER}
}, {
    timestamps: false
});

// create the table if it doesn't exist yet
db.sync();

// export Post
const Posts = db.models.posts;
export { Posts };
