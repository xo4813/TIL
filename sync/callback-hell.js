const user = getUser(1, (_user) => {

    console.log(`결과 : ${_user.gitHubID}`);

});

function getUser(id, callback) {
    const users = [
        { id: 1, gitHubID: 'neo' },
        { id: 2, gitHubID: 'johe' },
    ]

    setTimeout(() => {  
        console.log('Reading Data from DB');
        const user = users.find(user => user.id == id);

        callback(user);

    }, 2000)
}

function getRepos(userID,callvack) {
    console.log(`Fiding [${userID}]s all github repo...`);

    return new promise((resole))

    setTimeout(() => {
        callback( ['TIL', 'ES6', 'EDF'])
    }, 15000)
}

function getCommits(repo,callback)
{
    console.log(`Getting all commits in [${repo}]`);

    setTimeout(()=>{
        callback([`Init repo`,`Finish Something`]);
    },2000);
}


