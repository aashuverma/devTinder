const authAdmin = (req, res, next) => {
  console.log("admin auth is getting checked");
  const token = "xyz";

  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user auth is getting checked");

  const token = "xyz";

  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request");
  } else {
    next();
  }
};

module.exports = { authAdmin, userAuth };
