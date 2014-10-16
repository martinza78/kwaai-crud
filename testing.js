var connectionString="mongodb://127.0.0.1:27017/testdb";
var kwaaiCrud=require('./index.js').crudTools(connectionString);
var kwaaiCrudUtils=require('./index.js').utils;
var schema={
    properties:{
        name:{type:"string"},
        description:{type:"string"}
    },
    required:["name"]
}


kwaaiCrud.updatePart({
    validate:true,
    collection:"test collection",
    data:[
        {
            "op": "add",
            "path": "/addVal2",
            "value":"test"
        }
    ],
    schema:schema,
    id:"540af26377e3ed1c0568e4c4",
    useName:true
},function(err,val){
    if (err){console.error(err)}else {
        console.log(val);
    }
    return;

})

return;

var testPatch=[
    {
        "op": "replace",
        "path": "/addVal",
        "value": "valreplaced"
    },
    {
        "op": "add",
        "path": "/testArr/-",
        "value": "isnertedval"

    },
    {
        "op": "add",
        "path": "/testArr/1",
        "value": "isneratpositiontedval"

    }
]
var mongoUpdate=kwaaiCrudUtils.JSONPatchToMongo(testPatch);
console.log(mongoUpdate)
return;

var validdoc={
    "name":"testDistinct2343",
    "description":"testDistinct34",
    "addVal":"val123"
}

kwaaiCrud.countByQuery({
    collection:"test collection",
    query:{
        select:"name"
    },
    rawQuery:{
        select:{name:1,description:1},
        find:{
            name:"testDistinct"}
    }

},function(err,val){
    if (err){console.error(err)}else{
        console.log(val);}

})
return;




kwaaiCrud.getById({
    collection:"test collection",
   id:"540af26377e3ed1c0568e4c4"
},function(err,val){
    if (err){console.error(err)}
    console.log(val)

})


return;


var schema={
    properties:{
        name:{type:"string"},
        description:{type:"string"}
    },
    required:["name"]
}

var validdoc={
    name:"testDistinct",
    description:"testDistinct",
    addVal:"val2"
}

var invaliddoc={
    description:"test1"
}



function operationCompleted(err,value){
    if (err){console.error(err)}
}

kwaaiCrud.generateDataPatch({
    collection:"test collection",
    id:"540af26377e3ed1c0568e4c4",
    data:[
        {op:"add","path":"/anotherThing","value":"a value dddxxx"}

    ]
},operationCompleted)




kwaaiCrud.countByQuery({
    collection:"test collection",
    rawQuery:{
        where:{name:"test2"}
    }

},function(err,val){
    if (err){console.error(err)}else{
    console.log(val);}

})

kwaaiCrud.insert({
    validate:true,
    collection:"test collection",
    schema:schema,
    data:invaliddoc
},function(err,val){
    if (err){console.error(err)}else{
        console.log(val);}

})

kwaaiCrud.insert({
    validate:true,
    collection:"test collection",
    schema:schema,
    data:validdoc
},function(err,val){
    if (err){console.error(err)}else{
        console.log(val);}

})

kwaaiCrud.delete({
    collection:"test collection",
    id:"5400a4160b56b58c1a0e1979",
    useName:true
},function(err,val){
    if (err){console.error(err)}else{
        console.log(val);}

})

kwaaiCrud.updateFull({
    validate:true,
    collection:"test collection",
    data:validdoc,
    schema:schema,
    id:"testDistinct",
    useName:true
},function(err,val){
    if (err){console.error(err)}else{
        console.log(val);}

})

/*






console.log("insert check arguments")
kwaaiCrud.insert({
},operationCompleted)

//invalid data
console.log("insert invalid data")



console.log("check schema if validate true")
kwaaiCrud.insert({
    validate:true,
    collection:{name:"test collection",connectionString:connectionString},
    data:invaliddoc
},operationCompleted)


console.log("insert data no schema")
kwaaiCrud.insert({
    validate:false,
    collection:{name:"test collection",connectionString:connectionString},
    data:validdoc
},operationCompleted)

console.log("insert data")
kwaaiCrud.insert({
    validate:true,
    collection:{name:"test collection",connectionString:connectionString},
    data:validdoc,
    schema:schema
},operationCompleted)


 kwaaiCrud.aggregate({
 collection:{name:"test collection",connectionString:connectionString},
 pipeline:[
 {
 $group : {
 _id : "Count",

 count: { $sum: 1 }
 }
 }
 ]

 },function(err,val){
 console.log(val)

 })




*/


