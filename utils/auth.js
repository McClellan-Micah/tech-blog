const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login');
  }
};

module.exports = withAuth;
