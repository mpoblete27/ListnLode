import User from "../../models/users";
import jwtSecret from "../jwtConfig";
import jwt from "jsonwebtoken";
import passport from "passport";

module.exports = app => {
    app.get("/loginUser", (req,res, next) =>{
        passport.authenticate("login", (err, user, info) => {
            if (err) {
                console.log(err);
            }
            else if (info === undefined) {
                console.log(info.message);
                res.send(info.message);
            }
            else {
                req.logIn(user, err =>{
                    const token = jwt.sign({ id: user.username }, jwtSecret.secret);
                    res.status(200).send({
                        auth: true,
                        token: token,
                        message: "user found & logged in",
                    });
                });
            };
        };
    }
)};