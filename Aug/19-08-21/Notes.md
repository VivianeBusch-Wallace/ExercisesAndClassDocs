Difference SQL vs NoSQL >>

SQL >>
SQL = Structured Query Language
programming language used to manage relational databases
SQL databases examples: MySQL, Oracle, PostgreSQL, and Microsoft SQL Server, Couch DB
(source: https://medium.com/@mandeepkaur1/sql-vs-nosql-mysql-vs-mongodb-the-difference-6145e437cd40)

NoSQL
NoSQL = not only structured query language
refers to high-performance, non-relational databases that utilize a wide variety of data models
these databases are highly recognized for their ease-of-use, scalable performance, strong resilience, and wide availability
NoSQL database examples include MongoDB, BigTable, RavenDB Cassandra, HBase, Neo4j and CouchDB
(source: https://medium.com/@mandeepkaur1/sql-vs-nosql-mysql-vs-mongodb-the-difference-6145e437cd40)
NoSQL databases can easily scale big data, unlike relational databases
NoSQL doesn't need a detailed database model, unlike MySQL where database models need to be in place before creation
lacks a standard query language
dynamic schemas, which are a benefit of NoSQL

Also check MySQL vs NoSQL infographic on: https://www.educba.com/mysql-vs-nosql/
NoSQL Interview Questions >> https://www.educba.com/nosql-interview-questions/

Comparing MySQL and SQL >>

"MySQL is used in the SQL database management system, a product from Microsoft corporation, where in NoSQL is a database type where SQL is necessary to access the document-based contents of the non-relational database management systems. Structuring and standardizing the database is essential for a relational database with MySQL. NoSQL, on the other hand, allows the unformatted and non-related data to be placed and operated as per the user’s requirements."
Source: https://www.educba.com/mysql-vs-nosql/

MySQL >>

MySQL is relational in nature, that means all the data is stored in different tables and relations are established using primary keys or foreign keys
SQL is the standard language used for MySQL
"It can work on a multitude of operating systems and with many languages like C++, PHP, Java, C, etc. One of the key advantages of MySQL is that it is customizable since open source GPL license allows programmers to modify the MySQL software to fit their own specific environments."
schema rigid
not so flexible design-wise: new column or field insertion affects design
MySQL is available with a wide array of reporting tools help application’s validity whereas NoSQL databases lack reporting tools for analysis and performance testing.
"MySQL like a relational database can provide a performance issue for a huge amount of data, hence require optimization of queries whereas NoSQL databases like MongoDB are good at performance even with the dataset is huge in size."
Source: https://www.educba.com/mysql-vs-nosql/

MySQL Interview Questions >> https://www.educba.com/mysql-interview-questions/

Introduction to MongoDB >>

Install the MongoDB Compass from: https://www.mongodb.com/try/download/tools
For Ubuntu:
Open the file
Click Install
Now the MongoDB app should be available as an application on your computer (icon: green leaf on white background)

Install the MongoDB Community Server (Other available options: https://www.mongodb.com/try/download)
by following the instructions on: https://docs.mongodb.com/manual/administration/install-community/
Follow the instructions important for your computer OP

Mongoose

"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB."

What is MVC?

MVC = Model View Controller
https://www.methodpark.de/blog/model-view-controller-mvc/ (in German)

Practice Log from today (in terminal):

dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
[sudo] password for dci:
OK
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ lsb_release -dc
Description: Ubuntu 20.04.2 LTS
Codename: focal
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
OK
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo apt-get update
Hit:1 http://dl.google.com/linux/chrome/deb stable InRelease
Hit:2 http://de.archive.ubuntu.com/ubuntu focal InRelease  
Hit:3 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease  
Hit:4 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease  
Get:5 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]  
Ign:6 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 InRelease
Get:7 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 Release [4.406 B]
Get:8 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 Release.gpg [801 B]
Get:9 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse arm64 Packages [6.291 B]
Get:10 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 Packages [6.548 B]
Get:11 http://security.ubuntu.com/ubuntu focal-security/main amd64 DEP-11 Metadata [27,6 kB]
Get:12 http://security.ubuntu.com/ubuntu focal-security/universe amd64 DEP-11 Metadata [61,1 kB]
Get:13 http://security.ubuntu.com/ubuntu focal-security/multiverse amd64 DEP-11 Metadata [2.464 B]
Fetched 223 kB in 2s (122 kB/s)  
Reading package lists... Done
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo apt-get update
Hit:1 http://dl.google.com/linux/chrome/deb stable InRelease
Hit:2 http://de.archive.ubuntu.com/ubuntu focal InRelease  
Ign:3 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 InRelease  
Hit:4 http://de.archive.ubuntu.com/ubuntu focal-updates InRelease  
Hit:5 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 Release  
Hit:6 http://de.archive.ubuntu.com/ubuntu focal-backports InRelease  
Hit:7 http://security.ubuntu.com/ubuntu focal-security InRelease  
Reading package lists... Done
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ ps --no-headers -o comm 1
systemd
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl start mongod
Failed to start mongod.service: Unit mongod.service not found.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl daemon-reload
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl daemon-reload
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl start mongod
Failed to start mongod.service: Unit mongod.service not found.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl daemon-reload
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl start mongod
Failed to start mongod.service: Unit mongod.service not found.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl status mongod
Unit mongod.service could not be found.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ ls
mongodb-compass_1.28.1_amd64.deb
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ ls-la
ls-la: command not found
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ ls -la
total 85712
drwxrwxr-x 2 dci dci 4096 Aug 19 10:26 .
drwxrwxr-x 8 dci dci 4096 Aug 19 10:26 ..
-rw-rw-r-- 1 dci dci 87759268 Aug 19 10:25 mongodb-compass_1.28.1_amd64.deb
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl stop mongod
Failed to stop mongod.service: Unit mongod.service not loaded.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo apt-get install -y mongodb-org
Reading package lists... Done
Building dependency tree  
Reading state information... Done
The following packages were automatically installed and are no longer required:
libfprint-2-tod1 libllvm10 libllvm11 libllvm9 shim
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
libcurl4 mongodb-database-tools mongodb-mongosh mongodb-org-database mongodb-org-database-tools-extra
mongodb-org-mongos mongodb-org-server mongodb-org-shell mongodb-org-tools
The following NEW packages will be installed:
libcurl4 mongodb-database-tools mongodb-mongosh mongodb-org mongodb-org-database
mongodb-org-database-tools-extra mongodb-org-mongos mongodb-org-server mongodb-org-shell
mongodb-org-tools
0 upgraded, 10 newly installed, 0 to remove and 3 not upgraded.
Need to get 147 MB of archives.
After this operation, 449 MB of additional disk space will be used.
Get:1 http://de.archive.ubuntu.com/ubuntu focal-updates/main amd64 libcurl4 amd64 7.68.0-1ubuntu2.6 [234 kB]
Get:2 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-database-tools amd64 100.5.0 [46,5 MB]
Get:3 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-mongosh amd64 1.0.5 [41,6 MB]
Get:4 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-shell amd64 5.0.2 [14,3 MB]
Get:5 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-server amd64 5.0.2 [26,5 MB]
Get:6 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-mongos amd64 5.0.2 [18,1 MB]
Get:7 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-database-tools-extra amd64 5.0.2 [7.752 B]
Get:8 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-database amd64 5.0.2 [3.536 B]
Get:9 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org-tools amd64 5.0.2 [2.892 B]
Get:10 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0/multiverse amd64 mongodb-org amd64 5.0.2 [2.928 B]
Fetched 147 MB in 36s (4.090 kB/s)  
Selecting previously unselected package libcurl4:amd64.
(Reading database ... 239898 files and directories currently installed.)
Preparing to unpack .../0-libcurl4_7.68.0-1ubuntu2.6_amd64.deb ...
Unpacking libcurl4:amd64 (7.68.0-1ubuntu2.6) ...
Selecting previously unselected package mongodb-database-tools.
Preparing to unpack .../1-mongodb-database-tools_100.5.0_amd64.deb ...
Unpacking mongodb-database-tools (100.5.0) ...
Selecting previously unselected package mongodb-mongosh.
Preparing to unpack .../2-mongodb-mongosh_1.0.5_amd64.deb ...
Unpacking mongodb-mongosh (1.0.5) ...
Selecting previously unselected package mongodb-org-shell.
Preparing to unpack .../3-mongodb-org-shell_5.0.2_amd64.deb ...
Unpacking mongodb-org-shell (5.0.2) ...
Selecting previously unselected package mongodb-org-server.
Preparing to unpack .../4-mongodb-org-server_5.0.2_amd64.deb ...
Unpacking mongodb-org-server (5.0.2) ...
Selecting previously unselected package mongodb-org-mongos.
Preparing to unpack .../5-mongodb-org-mongos_5.0.2_amd64.deb ...
Unpacking mongodb-org-mongos (5.0.2) ...
Selecting previously unselected package mongodb-org-database-tools-extra.
Preparing to unpack .../6-mongodb-org-database-tools-extra_5.0.2_amd64.deb ...
Unpacking mongodb-org-database-tools-extra (5.0.2) ...
Selecting previously unselected package mongodb-org-database.
Preparing to unpack .../7-mongodb-org-database_5.0.2_amd64.deb ...
Unpacking mongodb-org-database (5.0.2) ...
Selecting previously unselected package mongodb-org-tools.
Preparing to unpack .../8-mongodb-org-tools_5.0.2_amd64.deb ...
Unpacking mongodb-org-tools (5.0.2) ...
Selecting previously unselected package mongodb-org.
Preparing to unpack .../9-mongodb-org_5.0.2_amd64.deb ...
Unpacking mongodb-org (5.0.2) ...
Setting up mongodb-mongosh (1.0.5) ...
Setting up mongodb-database-tools (100.5.0) ...
Setting up mongodb-org-database-tools-extra (5.0.2) ...
Setting up libcurl4:amd64 (7.68.0-1ubuntu2.6) ...
Setting up mongodb-org-server (5.0.2) ...
Adding system user `mongodb' (UID 126) ... Adding new user `mongodb' (UID 126) with group `nogroup' ... Not creating home directory `/home/mongodb'.
Adding group `mongodb' (GID 133) ... Done. Adding user `mongodb' to group `mongodb' ...
Adding user mongodb to group mongodb
Done.
Setting up mongodb-org-shell (5.0.2) ...
Setting up mongodb-org-tools (5.0.2) ...
Setting up mongodb-org-mongos (5.0.2) ...
Setting up mongodb-org-database (5.0.2) ...
Setting up mongodb-org (5.0.2) ...
Processing triggers for man-db (2.9.1-1) ...
Processing triggers for libc-bin (2.31-0ubuntu9.2) ...
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl start mongod
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl status mongod
● mongod.service - MongoDB Database Server
Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
Active: active (running) since Thu 2021-08-19 10:58:00 CEST; 12s ago
Docs: https://docs.mongodb.org/manual
Main PID: 20144 (mongod)
Memory: 59.4M
CGroup: /system.slice/mongod.service
└─20144 /usr/bin/mongod --config /etc/mongod.conf

Aug 19 10:58:00 dci-HP-Laptop-15-db1xxx systemd[1]: Started MongoDB Database Server.
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl stop mongod
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ sudo systemctl restart mongod
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ mongosh
Current Mongosh Log ID: 611e1d5f39f79d2d9025d5b5
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000
Using MongoDB: 5.0.2
Using Mongosh: 1.0.5

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

---

The server generated these startup warnings when booting:
2021-08-19T10:59:00.875+02:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
2021-08-19T10:59:01.794+02:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

test> show dbs
admin 41 kB
config 12.3 kB
local 73.7 kB
test> db
test
test> use newDB
switched to db newDB
newDB> show dbs
admin 41 kB
config 12.3 kB
local 73.7 kB
newDB> db
newDB
newDB> db.createCollection('info')
{ ok: 1 }
newDB> show collections
info
newDB> db.createCollection('data')
{ ok: 1 }
newDB> show collections
data
info
newDB> dn.info.insert({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date Date()})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:77)

> 1 | dn.info.insert({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date Date()})

    |                                                                              ^

2 |

newDB> dn.info.insertOne({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date Date()})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:80)

> 1 | dn.info.insertOne({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date Date()})

    |                                                                                 ^

2 |

newDB> dn.info.insertOne({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date:Date()})
ReferenceError: dn is not defined
newDB> db.info.insertOne({name:"Hadi",age:31,add:"Berlin",hobbies:["eat","sleep"],date:Date()})
{
acknowledged: true,
insertedId: ObjectId("611e204cd942f02b38af10c3")
}
newDB> db.info.find()
[
{
\_id: ObjectId("611e204cd942f02b38af10c3"),
name: 'Hadi',
age: 31,
add: 'Berlin',
hobbies: [ 'eat', 'sleep' ],
date: 'Thu Aug 19 2021 11:11:40 GMT+0200 (Central European Summer Time)'
}
]
newDB> db.info.insertOne({name:"Olga",age:31,add:"Collogne",hobbies:[t","sleep"],date:Date()})
[1]+ Stopped mongosh
dci@dci-HP-Laptop-15-db1xxx:~/apps/app packages$ mongosh
Current Mongosh Log ID: 611e2152abf5bcedb445297a
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000
Using MongoDB: 5.0.2
Using Mongosh: 1.0.5

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

---

The server generated these startup warnings when booting:
2021-08-19T10:59:00.875+02:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
2021-08-19T10:59:01.794+02:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

test> db
test
test> show collections

test> db.createCollection("data")
{ ok: 1 }
test> db.data.insertOne({name:"Hadi",age:31,hobbies:["eat","sleep"]})
{
acknowledged: true,
insertedId: ObjectId("611e22d98b783cae9144a174")
}
test> db.data.insertMany({name:"Judy",age:31,hobbies:["eat","sleep","eat more"]},{name:"Olga",age:35,hobbies:["dancing","art"]})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
test> db.data.insertMany([{name:"Judy",age:31,hobbies:["eat","sleep","eat more"]},{name:"Olga",age:35,hobbies:["dancing","art"]}])
{
acknowledged: true,
insertedIds: {
'0': ObjectId("611e24128b783cae9144a175"),
'1': ObjectId("611e24128b783cae9144a176")
}
}
test> db.info.remove({name:'Olga'})
DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
{ acknowledged: true, deletedCount: 0 }
test> db.info.find()

test> db.data.find()
[
{
\_id: ObjectId("611e22d98b783cae9144a174"),
name: 'Hadi',
age: 31,
hobbies: [ 'eat', 'sleep' ]
},
{
\_id: ObjectId("611e24128b783cae9144a175"),
name: 'Judy',
age: 31,
hobbies: [ 'eat', 'sleep', 'eat more' ]
},
{
\_id: ObjectId("611e24128b783cae9144a176"),
name: 'Olga',
age: 35,
hobbies: [ 'dancing', 'art' ]
}
]
test> db.data.remove({name:'Olga'})
{ acknowledged: true, deletedCount: 1 }
test> db.data.insertMany([{name:"Judy",age:31,hobbies:["eat","sleep","eat more"]},{name:"Olga",age:35,hobbies:["dancing","art"]}])
{
acknowledged: true,
insertedIds: {
'0': ObjectId("611e25758b783cae9144a177"),
'1': ObjectId("611e25758b783cae9144a178")
}
}
test> db.data.find()
[
{
\_id: ObjectId("611e22d98b783cae9144a174"),
name: 'Hadi',
age: 31,
hobbies: [ 'eat', 'sleep' ]
},
{
\_id: ObjectId("611e24128b783cae9144a175"),
name: 'Judy',
age: 31,
hobbies: [ 'eat', 'sleep', 'eat more' ]
},
{
\_id: ObjectId("611e25758b783cae9144a177"),
name: 'Judy',
age: 31,
hobbies: [ 'eat', 'sleep', 'eat more' ]
},
{
\_id: ObjectId("611e25758b783cae9144a178"),
name: 'Olga',
age: 35,
hobbies: [ 'dancing', 'art' ]
}
]
test>
