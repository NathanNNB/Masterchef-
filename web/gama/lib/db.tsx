import {MongoClient} from 'mongodb'
  
  const client = await MongoClient.connect(
    'mongodb+srv://dbUser:IoCYwlCgxOXY1i7j@teste.h0urp.mongodb.net/teste0?retryWrites=true&w=majority'
  );
    
    return client;
  };
