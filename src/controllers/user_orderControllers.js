import { Sequelize } from 'sequelize';
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import rate_res from "../models/rate_res.js";


const model = initModels(sequelize);

const userorder = async (req, res) => {
    let { userid, foodid } = req.params;
    let checkid = await model.users.findOne({
        where: {
            user_id: userid
        }
    });
    let checkfoodid = await model.food.findOne({
        where: {
            food_id: foodid
        }
    })
    if (checkid) {
        if (checkfoodid) {
            // let food = await model.food.findOne({
            //     where: {
            //         food_id: foodid
            //     }
            // });

            res.send(`món đã đặt là :${checkfoodid.food_name}`);return
        } else
            res.send('foodid không tồn tại')
        return
    } else res.send('userid không tồn tại')
    return

}
export default userorder;