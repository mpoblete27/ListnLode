const Sequelize = require('sequelize');

const uploadsTable = require('./models/uploads');
const userTable = require('./models/users');
const postsTable = require('./models/posts');
const pinsTable = require('./models/pins');


const User = userTable(sequelize, Sequelize);
const Upload = uploadsTable(sequelize, Sequelize);
const Post = postsTable(sequelize, Sequelize);
const Pin = pinsTable(sequelize, Sequelize);

User
Upload.belongsToMany(Tag, {through: Upload, unique: false});
Upload.belongsTo(User);
Pin.belongsToMany(Tag, {through: Pin, unique: false});
Pin.belongsTo(User);
Post.belongsToMany(Tag, {through: Post, unique: false});
Post.belongsTo(User);


sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })