const express = require('express');
const router = express.Router();
const user = require('../auth/models/users-model');
const bearerAuth = require('../auth/middleware/bearer.js');
const permissions = require('../auth/middleware/acl.js');
router.get('/', (req, res) => {
  user.get().then((data) => {
    res.cookie(
      'auth',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTFlZTA3NDdkOWEwMjFhNjdmOGEyYiIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTkxODY0ODQwfQ.MoWN7O1prV2unxLo2tXNHQwSseqCAUqHfrUu287FuNU'
    );
    res.json(data);
  });
});
router.get('/read', bearerAuth, permissions('read'), routeHandler);
router.post('/create', bearerAuth, permissions('create'), routeHandler);
router.put('/update', bearerAuth, permissions('update'), routeHandler);
router.delete('/delete', bearerAuth, permissions('delete'), routeHandler);

function routeHandler(req, res) {
  res.status(200).send('Access Granted');
}

module.exports = router;
