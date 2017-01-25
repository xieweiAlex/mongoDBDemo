

/*
 {"address": {"building": "1007", "coord": [-73.856077, 40.848447], "street": "Morris Park Ave", "zipcode": "10462"}, "district": "Bronx", "cuisine": "Bakery", "grades": [{"date": {"$date": 1393804800000}, "grade": "A", "score": 2}, {"date": {"$date": 1378857600000}, "grade": "A", "score": 6}, {"date": {"$date": 1358985600000}, "grade": "A", "score": 10}, {"date": {"$date": 1322006400000}, "grade": "A", "score": 9}, {"date": {"$date": 1299715200000}, "grade": "B", "score": 14}], "name": "Morris Park Bake Shop", "restaurant_id": "30075445"}

 {"address": {"building": "107", "coord": [-74.00920839999999, 40.7132925], "street": "Church Street", "zipcode": "10007"}, "district": "Manhattan", "cuisine": "American ", "grades": [{"date": {"$date": 1405641600000}, "grade": "A", "score": 12}, {"date": {"$date": 1393372800000}, "grade": "A", "score": 9}, {"date": {"$date": 1377475200000}, "grade": "A", "score": 9}, {"date": {"$date": 1359676800000}, "grade": "A", "score": 12}, {"date": {"$date": 1326758400000}, "grade": "A", "score": 13}, {"date": {"$date": 1318896000000}, "grade": "A", "score": 11}], "name": "Downtown Deli", "restaurant_id": "40363021"}

 */

// mongoshell exercise

db.res.find({ $and: [
    {'cuisine': {$not: {$eq: 'American'} }},
    {'address.coord': {$lt: -65.754168}},
    {'grades.score': {$gt: 70}}
]});

db.res.find({ $and: [
    {'cuisine': {$not: {$eq: 'Hamburgers'} }},
    {'address.coord': {$lt: -65.754168}},
    {'grades.score': {$gt: 70}}
]});

db.res.find({ $and: [
    {'grades.score': {$gt: 70}}
]});


db.res.find( {'grades.score': {$gt: 70} } );

db.res.find( { "cuisine" : {$eq: "American"} } )

db.res.find( { "name" : {$regex: "^Wil", $options: "i"} }, {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );

db.res.find( { "name" : {$regex: "Reg", $options: "i"} }, {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );


db.res.find({ $and: [
    {'district': 'Bronx'},
    {'cuisine': { $in: ['American', 'Chinese'] } }
]});


db.res.find(
    { "district" : { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } },
    {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );


db.res.find(
    { "district" : {$not: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } } },
    {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );

db.res.find(
    { "district" : {$not: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } } },
    {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );


db.res.find(
    { "grades.score" : {$not: {$gt: 10} } },
    {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );

db.res.find(
    { "address" : {"matched": {$arrayElemAt: ['coord', 1] } } } ,
    {'restaurant_id': 1, 'name': 1, 'district': 1, cuisine: 1} );

// db.foo.find({ bar : "xyz" } , { my_array : { $slice : [n , 1] } } )

db.res.find().sort( {'address': 1} )


db.res.find().sort( {'cuisine': 1} )




