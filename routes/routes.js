const appRouter = (app, fs) => {

  const dataPath = './db.json';

  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

  app.post('/users', (req, res) => {
    readFile(data => {
    const newUserId = Date.now().toString();
      data[newUserId] = req.body;
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new Employee added');
      });
    }, true);
  });

  app.put('/users/:id', (req, res) => {
    readFile(data => {
      const userId = req.params['id'];
      data[userId] = req.body;
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${userId} updated`);
      });
    }, true);
  });

  app.delete('/users/:id', (req, res) => {
    readFile(data => {
      const userId = req.params['id'];
      delete data[userId];
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${userId} removed`);
      });
    }, true);
  });
};
module.exports = appRouter;