db.users.insertMany([{
    "userID": 1,
    "name": "john",
    "mobile": 1234567890,
    "email": "john@gmail.com",
    "course": "fsd",
    "selected":"yes",
    "batch": "B25-WD2",
    "class1": true,
    "task1":true,
    "date":"21-10-2020"
    
},
{
    "userID": 2,
    "name": "jack",
    "mobile": 7584927654,
    "email": "jack@gmail.com",
    "course": "fsd",
    "selected":"yes",
    "batch": "B25-WD2",
    "class1": true,
    "task1":true,
    "date":"23-10-2020"
    
},
{
    "userID": 3,
    "name": "abi",
    "mobile": 1234651230,
    "email": "abi@gmail.com",
    "course": "fsd",
    "selected":"yes",
    "batch": "B25-WD2",
    "class1": true,
    "task1":true,
    "date":"21-10-2020"
    
},
{
    "userID": 4,
    "name": "priya",
    "mobile": 1232387690,
    "email": "priya@gmail.com",
    "course": "fsd",
    "selected":"yes",
    "batch": "B25-WD2",
    "class1": true,
    "task1":true,
    "date":"14-10-2020"
    
},
{
    "userID": 5,
    "name": "karthik",
    "mobile": 1245987120,
    "email": "karthik@gmail.com",
    "course": "fsd",
    "selected":"no",
    "batch": "B25-WD2",
    "class1": false,
    "task1":false,
    "date":"16-10-2020"
    
}]
)

db.codekata.insertMany([
    {
        "userID": 1,
        "solved_problems": 200,
        "total_problems": 500,
        "last_solved": new Date().toLocaleString()
    },
    {
        "userID": 2,
        "solved_problems": 100,
        "total_problems": 500,
        "last_solved": new Date().toLocaleString()
    },
    {
        "userID": 3,
        "solved_problems": 250,
        "total_problems": 500,
        "last_solved": new Date().toLocaleString()
    },
    {
        "userID": 4,
        "solved_problems": 300,
        "total_problems": 500,
        "last_solved": new Date().toLocaleString()
    },
    {
        "userID": 5,
        "solved_problems": 350,
        "total_problems": 500,
        "last_solved": new Date().toLocaleString()
    },
])



db.attendance.insertMany([{ "userId": 1, "attendance": 32, "mentorId": 1, "batchId": 1, "total": 34, "noAttendance": 2 },
{ "userId": 2, "attendance": 18, "mentorId": 2, "batchId": 2, "total": 32, "noAttendance": 14 },
{ "userId": 3, "attendance": 23, "mentorId": 3, "batchId": 3, "total": 34, "noAttendance": 11 },
{ "userId": 4, "attendance": 28, "mentorId": 4, "batchId": 4, "total": 34, "noAttendance": 6 },
{ "userId": 5, "attendance": 34, "mentorId": 3, "batchId": 3, "total": 34, "noAttendance": 0 }])


db.topics.insertMany([{ "id": 1, "topic": "DOM manipulation", "date": ISODate("2023-10-01T01:01:22.010Z"), "taskId": 1 },
{ "id": 2, "topic": "DOM manipulation - session 2", "date": ISODate("2023-10-07T01:01:22.010Z"), "taskId": 2 },
{ "id": 3, "topic": "Node", "date": ISODate("2023-10-12T01:01:22.010Z"), "taskId": 3 },
{ "id": 4, "topic": "React", "date": ISODate("2023-07-20T01:01:22.010Z"), "taskId": 4 },
{ "id": 5, "topic": "Mongo", "date": ISODate("2023-10-30T01:01:22.010Z"), "taskId": 5 }
])

db.tasks.insertMany([
    { "id": 1, "task": "DOM Event Listener" },
    { "id": 2, "task": "DOM Bootstrap" },
    { "id": 3, "task": "creating server using http" },
    { "id": 4, "task": "redux cart" },
    { "id": 5, "task": "Mongo Queries" }
])

db.company_drives.insertMany([
    { "id": 1, "Companyname": "Amazon", "date": ISODate("2020-10-15T01:01:22.010Z") },
    { "id": 2, "Companyname": "Paypal", "date": ISODate("2020-10-01T01:01:22.010Z") },
    { "id": 3, "Companyname": "Zoho", "date": ISODate("2020-10-30T01:01:22.010Z") },
    { "id": 4, "Companyname": "ChargeBee", "date": ISODate("2020-10-05T01:01:22.010Z") }
])


db.mentors.insertMany([
    { "id": 1, "name": "Mentor 1", "type": "weekend", "company": "infosys", "batchId": 1, "batch": ["B30WE", "B30WD"], "expertise": ["mongo", "react", "JS", "AWS"],"count":20, "joinedDate": "2023-10-02" },
    { "id": 2, "name": "Mentor 2", "type": "weekday", "company": "infosys", "batchId": 2, "batch": ["B29WD"], "expertise": ["mongo", "Node", "HTML", "DS"],"count":5, "joinedDate": "2021-01-03" },
    { "id": 3, "name": "Mentor 3", "type": "weekday", "company": "CTS", "batchId": 3, "batch": ["B28WD"], "expertise": ["mongo", "Node", "CSS", "System Design"],"count":25, "joinedDate": "2021-11-23" },
    { "id": 4, "name": "Mentor 4", "type": "weekend", "company": "Amazon", "batchId": 4, "batch": ["B28WE"], "expertise": ["mongo", "Node", "CSS", "System Design"],"count":10, "joinedDate": "2022-02-14" },
    { "id": 5, "name": "Mentor 5", "type": "weekday", "company": "Paypal", "batchId": 5, "batch": ["B27WD"], "expertise": ["mongo", "CSS", "HTML", "DS", "Node", "Angular"],"count":16, "joinedDate": "2021-10-7" }])


//1.Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
        $match: {
            "date": { $gte: ISODate("2023-10-01T01:01:22.010Z"), $lt: ISODate("2023-10-31T01:01:22.010Z")  }
        }
    },
    {
        $lookup: {
            from: "tasks",
            localField: "taskId",
            foreignField: "id",
            as: "Tasks",
           
        }
    },

    {
        $project: {
            "_id":0,
            "topic": 1,
            "Task": "$Tasks.task"
        }
    },

])


//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
    date: {
        $gt: ISODate("2020-10-14T04:07:05.000Z"),
        $lte: ISODate("2020-10-31T03:12:15.012Z")
    }
}).pretty()

//3.Find all the company drives and students who are appeared for the placement.
db.users.aggregate([
    {
        $match:{
            selected:"yes"
        }
    },
   
    {
        $lookup: {
            from: "company_drives",
            localField: "userID",
            foreignField: "id",
            as: "selected",
           
        }
    },

    {
        $project: {
            "_id":0,
            "Name": "$name",
            "Company":"$selected.Companyname"
        }
    },

])

//4.Find the number of problems solved by the user in codekata
db.users.aggregate([
    {
        $lookup: {
            from: "codekata",
            localField: "userID",
            foreignField: "userID",
            as: "codekata",
           
        }
    },

    {
        $project: {
            "_id":0,
            "name": 1,
            "solved_problems": "$codekata.solved_problems"
        }
    },

])

//5.Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
    {
        $match: {
            count:{$gt:15}
        }
    },
   
    {
        $project: {
            "_id":0,
            "name": 1,
            "count": 1
        }
    },

])

//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users.aggregate([
    {
        $match:{
            task1:false,
            class1:false
        }
    }
]).pretty()