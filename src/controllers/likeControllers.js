import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getListlike = async (req, res) => {
    let data = await model.like_res.findAll();
    res.send(data);
}

const getListlikeTypeId = async (req, res) => {
    let {userId} = req.params;
    let data = await model.like_res.findAll({
        where: {
            user_id: userId
        }
    });

    res.send(data);
}
export {getListlike, getListlikeTypeId};