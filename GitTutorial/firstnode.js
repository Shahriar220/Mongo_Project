var mongodb=require('mongodb');
var MongoClient=require('mongodb').MongoClient,assert=require('assert');
//var url='mongodb://localhost:27017/myprojectdb';
//const MongoClient = new ;

/*MongoClient.connect('mongodb://localhost:27017',function(err,db){
	var collection=db.collection('students')	
	/*if(err) throw err;
	var db=client.db('testDB');
	var std1={name:'Shahriar',standard:10,subjects:['Physics','math','chemistry']};
	var std2={name:'Nihsat',standard:10,subjects:['Phychology','clinical']};
	var std3={name:'Puran',standard:10,subjects:['Biology','chemistry','english']};

	db.collection('students').insert([std1,std2,std3],function(insertErr,result){
		if(insertErr) throw err;
		console.log(result);

	});*/

	/*collection.update({name: 'Nishat'},{$set:{subjects:['history']}},function(err,numUpdated){
		if(err){
			console.log(err);
		}
		else if(numUpdated){
			console.log('Updated seccessfully %d documents(s)',numUpdated);
		}
		else{
			console.log('nothing to update');
		}
		db.close();
	});*/
	/*MongoClient.connect(url,function(err,db){
		assert.equal(null,err);
		var collection=db.collection('students');
		var std1={name:'Shahriar',standard:10,subjects:['cse']};
		collection.insert([std1],function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log("insertedd",result.length,result);
			}
			db.close();
		});
	});*/
	collection.find({name:'Shahriar'}).toArray(function(err,result){
		if(err)
			console.log(err);
		else if(result.length){
			console.log(result);
		}
		else{
			console.log('found nothing');
		}
		db.close();
	})
	collection.remove({name:'Shahriar'}).toArray(function(err,result){
		if(err)
			console.log(err);
		else if(result.length){
			console.log(result);
		}
		else{
			console.log('found nothing');
		}
		db.close();
	})