import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const getRate_res = async (req, res) => {
    let data = await model.rate_res.findAll();
    res.send(data);
}

const getRate_resTypeId = async (req, res) => {
    let {userId} = req.params;
    let data = await model.rate_res.findAll({
        where: {
            user_id: userId
        }
    });

    res.send(data);
}
export {getRate_res, getRate_resTypeId};