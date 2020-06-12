'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      console.log(req.user);
      if (req.user.acl.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Denied');
      }
    } catch (e) {
      console.log('oh noo', e.message);
      next(e.message);
    }
  };
};
