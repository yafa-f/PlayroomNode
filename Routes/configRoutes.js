const indexR=require('./index');
const usersR=require('./userRoutes');
const tipesOfGamesR=require('./tipesOfGamesRoutes');
const userstakingOrReturningR=require('./takingOrReturningRoutes');
const gamesListR=require('./gamesListRoutes');


exports.routesInit =(app)=>{
    // app.use("/",indexR);
    app.use("/userRoutes",usersR);
    app.use("/tipesOfGamesRoutes",tipesOfGamesR);
    app.use("/takingOrReturningRoutes",userstakingOrReturningR);
    app.use("/gamesListRoutes",gamesListR);
   
}