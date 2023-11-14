
// import { Sequelize } from "sequelize";
// khai báo kết nối database
// const sequelize = new Sequelize ("node36", "root", "1234",{
//     host : "localhost",
//     dialect :"mysql",
//     port:"3306"
// })
import express from "express";
import sequelize from "./src/models/connect.js";
import likeRoutes from "./src/routes/likeRoutes.js";
import rate_resRoutes from "./src/routes/rate_resRoutes.js";
import addcomments from "./src/routes/addcommentRoutes.js";
import user_orders from "./src/routes/user_orderRoutes.js";

const app = express();
app.use(express.json());
app.use(likeRoutes);
app.use(rate_resRoutes);
app.use(addcomments);
app.use(user_orders);
app.listen(8080);


//kiểm tra kết nối
// const checkConnect =async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("kết nối thành công");
//     } catch (error){
//         console.log("kết nối thất bại");
//     }
// };
// checkConnect();


// tạo model - table

//npx sequelize-auto -h localhost -d appfood -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm

