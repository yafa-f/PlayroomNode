const indexR=require('./index');
const usersR=require('./userRoutes');
const tipesOfGamesR=require('./tipesOfGamesRoutes');
const userstakingOrReturningR=require('./takingOrReturningRoutes');
const gamesListR=require('./gamesListRoutes');
const finesR=require('./finesRoutes');
const closetsR=require('./closetsRoutes');
const forAgesR=require('./forAgesRoutes');
const finesForMissingPartsR=require('./finesForMissingPartsRoutes');

exports.routesInit =(app)=>{
    app.use("/",indexR);
    app.use("/userRoutes",usersR);
    app.use("/finesRoutes",finesR);
    app.use("/tipesOfGamesRoutes",tipesOfGamesR);
    app.use("/takingOrReturningRoutes",userstakingOrReturningR);
    app.use("/gamesListRoutes",gamesListR);
    app.use("/closetsRoutes",closetsR);
    app.use("/forAgesRoutes",forAgesR);
    app.use("/finesForMissingPartsRoutes",finesForMissingPartsR);


}