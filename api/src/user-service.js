

const UserService = {
  async createUser(mongo,newUser) {

        for (const [key, value] of Object.entries(req.body))
        if (value == null)
          return res.status(400).json({
            error: `Missing '${key}' in request body`
          })
        try {
            
            const user = await mongo.user.create(newUser);
    
            if (!user) {
                
            }
    
            res.user = user
            next()
        }
        catch(error) {
            next(error)
          }
        
    },

}

module.exports = {UserService}