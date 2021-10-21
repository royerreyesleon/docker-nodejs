const app = require('./app')

// app.listen(3000, () => console.log('Server on port 3000'))
async function main(){
    await app.listen(3000)
    console.log('Server on port 3000');
}

main()
