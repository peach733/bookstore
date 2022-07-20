const { request } = require("express");
const httpStatus = require("http-status-codes");
const { add } = require("nodemon/lib/rules");
const pool = require("../middleware/database");

class user {
    /* Sign-up */
    async signup(req, res, next) {
        try {
            const user_id = req.body.user_id;
            const user_pw = req.body.user_pw;
            const user_name = req.body.user_name;
            
            await pool.query('insert into user(user_id, user_pw, user_name) values(?, ?, ?)', [user_id, user_pw, user_name]);
            // for (let allergy of allergy_name) {
            //     await pool.query('insert into allergy (user_id, allergy_name) values (?, ?)', [user_id, allergy])
            // }

            res.send('<script type="text/javascript">alert("SUCESS!");location.href="/login";</script>');            
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    /* Log-in */
    async login(req, res) {
        try {
            const user_id = req.body.user_id;
            const user_pw = req.body.user_pw;

            const login = await pool.query('select * from user where user_id = ? AND user_pw = ?', [user_id, user_pw]);

            console.log(error)
            
            if (login[0][0].user_id != user_id && login[0][0].user_pw != user_pw) {
                res.send('<script type="text/javascript">alert("회원 정보가 일치하지 않습니다.");location.href="/login";</script>');
            } else {
                res.send('<script type="text/javascript">alert("Welcome!");location.href="/home";</script>');
            }

        } catch (error) {
            // return res.status(500).json(error);
            console.log(error)
        }
    }
}

module.exports = user;