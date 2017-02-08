This is a 'Hello World' Meteor app using Apollo. It uses MySQL as the database and React as the UI framework.

## Install MySQL
To run, first install MySQL. On OSX:
```
> brew install mysql
``` 
Start MySQL and create a database named `meteor-mysql`

```
> mysql.server start
> mysql -u root

mysql>  CREATE DATABASE meteor-mysql;
```

## Run the app
First clone this repository, if you haven't already. Then run the app.
```
> meteor npm install
> meteor
``` 
You can view the app at `http://localhost:3000/` or the built in graphiqql browser at `http://localhot:3000/graphiql`

## Insert Records
The app creates the table `posts` in the `meteor-mysql` database but does not add any records. Do so now in the `mysql` CLI, 
```
mysql> USE meteor-mysql;
mysql> insert into posts (content, views) values ("hello world", 5);
```

In your browser you should now see "Hello World" reactively display in the app.