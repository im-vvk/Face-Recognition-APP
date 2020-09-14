
const handleProfileGet = (req, res , db) => {
    const { id } = req.params;
    db.select("*")
      .from("users")
      .where({
        id: id,
      })
      .then((user) => {
        if (user.length) {
          res.json(user[0]);
        } else {
          res.status(400).json("user not found");
        }
      })
      .catch((err) => res.status(404).json("no such user found"));
  };

module.exports = {
    handleProfileGet : handleProfileGet
}