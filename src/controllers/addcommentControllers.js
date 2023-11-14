import { Sequelize } from 'sequelize';
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import rate_res from "../models/rate_res.js";


const model = initModels(sequelize);

const addcomments = async (req, res) => {
    let { userid } = req.params;
    let checkid = await model.users.findOne({
        where: {
            user_id: userid
        }
    })
    if (checkid) {
        await rate_res.update(
            {
                comments: "sản phẩm tốt"
            },
            {
                where: { user_id: userid }
            }
        ).then(() => {
            res.send('đã thêm đánh giá');
            return
        });
    } else res.send('userid không tồn tại')
    return

}
export default addcomments;