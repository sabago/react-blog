import express from 'express'
import fs from 'fs'
import path from 'path'
import Cosmic from 'cosmicjs'
import http_module from 'http'
import cors from 'cors'
import _ from 'lodash'

const app = express();


app.use(cors())
app.set('port', (process.env.PORT || 5000))
const http = http_module.Server(app)


//CosmicJS credentials
const credentials = {
  bucket: {
    slug: 'sabago-blog' || '15b45be0-f24b-11e7-8739-bd1a2fa1284e',
    read_key: 'PinWPdxna0GoTz0Otl5QIF9ExeuHwPzZ9CizD1BcViuDjzNd9K' || '',
    write_key: 'SnTZenhSh6CiWBd4sERPQuEH0yDoct6C3XKrdXbhaCFu8EUAEN' || '',
  }
}

app.get('/api/posts', (req, res) => {
   Cosmic.getObjects(credentials, (err, response) => {
       if(err) return console.log("*eer",err);
       const posts = response.objects.type.posts;
       res.send(posts);
   })
 })


app.get('/api/posts/:slug', (req, res) => {
  Cosmic.getObjects(credentials, (err, response) => {
      if(err) return console.log(err);
      const posts = response.objects.type.posts;
      const queryPost = _.find(posts, ['slug', req.params.slug])
      res.send(queryPost);

  })
})

//added by me
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist/build/index.html'));
// })

// if production, serve react bundle
if(app.get('env') === 'production'){
  app.use(express.static(path.resolve(__dirname, '../dist/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/build/index.html'))
  })
}


http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})
