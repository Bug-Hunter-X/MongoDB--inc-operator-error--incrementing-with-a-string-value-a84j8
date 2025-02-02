```javascript
// Correct usage of $inc operator in MongoDB update
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"count": 1}});
```