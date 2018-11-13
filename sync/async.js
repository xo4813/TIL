
async function run() {
    const user = await getUser(1, gRepos);
    const repos = await getRepos(user.githubID);
    const commits = await getCommits(repos[0]);
}

run();

function gRepos(user) {
    getRepos(user.githubID, gCommits);
}

function gCommits(repos) {
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    
    const users = [
        { id: 1, githubID: 'neo' },
        { id: 2, githubID: 'john' }
    ]

    setTimeout(() => {
        console.log('Reading Data from DB');
        const user = users.find(user => user.id === id);
        // Ready!
        callback(user);
    }, 2000)
}

function getRepos(userID, callback) {
    console.log(`Finding [ ${userID} ]'s all github repo...`);
    setTimeout(() => {
        callback(['TIL', 'ES6', 'Express-demo']);
    }, 1500)
}

function getCommits(repo, callback) {
    console.log(`Getting all commits in [ ${repo} ]`);
    setTimeout(() => {
        callback(['Init repo', 'Finish Something'])
    }, 2000);
}