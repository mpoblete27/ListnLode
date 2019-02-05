CREATE DATABASE ListAndLodedb;

USE listnlode_db;

-- a user is a person with an account
CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(75),
    password VARCHAR(75),
    number_of_uploads INT default 0,
    number_of_posts INT default 0,
    number_of_pins INT default 0,
    number_of_playlists INT default 0,
    pins_liked INT default 0,
    PRIMARY KEY(id)
);

-- each upload is a song, containing info and attached pins (GIF, PNG, or JPEG format)
CREATE TABLE uploads(
    upload_id INT NOT NULL AUTO_INCREMENT,
	track_name VARCHAR(100),
    artist VARCHAR(100),
    composer VARCHAR(100),
    genre VARCHAR(100),
    album VARCHAR(100),
    duration TIME,
    user_id INT FOREIGN KEY,
    url VARCHAR(100),
    number_of_pins INT default 0,
    PRIMARY KEY(upload_id)
);

-- each playlist is user created with songs they already have uploaded
CREATE TABLE playlists(
    playlist_id INT NOT NULL AUTO_INCREMENT,
    playlist_name VARCHAR(100),
    user_id INT FOREIGN KEY,    
    number_of_tracks INT default 0,
    PRIMARY KEY(playlist_id)
);

-- each pin is either a GIF, PNG, or JPEG that is assigned to a user's upload id if they so choose
-- a pin_id belongs to a user id
-- a pin_format belongs to a pin_id
CREATE TABLE pins(
	pin_id INT NOT NULL AUTO_INCREMENT,
    pin_url VARCHAR(100),
    pin_format VARCHAR(100),
    number_of_pins INT default 0,
    user_id INT FOREIGN KEY,
    upload_id INT FOREIGN KEY,
    user_liked_id INT(100) 
    PRIMARY KEY(pin_id)
);

-- the forum is the community posting space containing topics of conversation -> containing posts by users
CREATE TABLE forums(
    forum_id INT NOT NULL AUTO_INCREMENT,
    topic_name VARCHAR (100),
    topic_id INT FOREIGN KEY,
    users_in_topic INT default 0,
    users_in_post INT default 0,
    PRIMARY KEY(forum_id)
);

-- posts are messages made by users in a topic on the forums
-- posts belong to a topic on the forum and belong to a user id
CREATE TABLE posts(
    post_id INT NOT NULL AUTO_INCREMENT TIMESTAMP,
    user_id INT FOREIGN KEY,
    topic_id INT NOT NULL AUTO_INCREMENT,
    post_message VARCHAR(5000),
    PRIMARY KEY(post_id)
);

-- comments are messages made in response to posts
CREATE TABLE comments(
    comment_id INT NOT NULL AUTO_INCREMENT TIMESTAMP,
    user_id INT FOREIGN KEY,
    post_id INT FOREIGN KEY,
    comment_message VARCHAR(280),
    PRIMARY KEY(comment_id)
);

-- chats are personal messages in a live, mass-user chatroom that is NOT IN THE FORUMS
-- chats belong to a user id 
CREATE TABLE chats(
    chat_id INT NOT NULL AUTO_INCREMENT TIMESTAMP,
    user_id INT FOREIGN KEY,
    chat_message VARCHAR(5000),
    number_of_users_in_chat INT default 0,
    PRIMARY KEY(chat_id)
);