console.log('예언 코드 진행중...');

const user = getUser(1, gRepos);

function gRepos(_user) {
    getRepos(_user.gitHubID);
}

function gCommits(repos) {
    getCommits(repos[0], displayCommits);
}

console.log('메인코드');

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

function getRepos(userID, callvack) {
    console.log(`Fiding [${userID}]s all github repo...`);

    setTimeout(() => {
        callback(['TIL', 'ES6', 'EDF'])
    }, 15000)

}

function getCommits(repo, callback) {
    console.log(`Getting all commits in [${repo}]`);

    setTimeout(() => {
        callback([`Init repo`, `Finish Something`]);
    }, 2000);

}

function displayCommits(commits) {
    console.log(commits);
}