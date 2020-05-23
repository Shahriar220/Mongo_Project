var studentInfoArray=[
{
	name:{firstName:"fff",lastName:"hhhh"},
	age:23,
	subjects:["a","b","c"],
	attedance:{
		aaa:"33%",
		bbb:"333%"
	}
},

{
	name:{firstName:"fffss",lastName:"hhsshh"},
	age:223,
	subjects:["ffa","ffb","ffc"],
	attedance:{
		aaa:"333%",
		bbb:"3332%"
	}
},
];
db.studentsInfoCollection.insert(studentInfoArray);