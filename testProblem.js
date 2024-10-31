function problemFollowers(input) {
    let followers = {};

    for (let line of input) {
        let pieces = line.split(`: `);
        let rate = pieces[2];
        let userName = pieces[1];
        let command = pieces[0];

        if (command === `New follower`) {
            if (!followers.hasOwnProperty(userName)) {
                followers[userName] = { likes: 0, comments: 0 };
            }
        } else if (command === `Like`) {
            if (!followers.hasOwnProperty(userName)) {
                followers[userName] = { likes: Number(rate), comments: 0 };
            } else {
                followers[userName].likes += Number(rate);
            }
        } else if (command === `Comment`) {
            if (!followers.hasOwnProperty(userName)) {
                followers[userName] = { likes: 0, comments: 1 };
            } else {
                followers[userName].comments += 1;
            }
        } else if (command === `Blocked`) {
            if (followers.hasOwnProperty(userName)) {
                delete followers[userName];
            } else {
                console.log(`${userName} doesn't exist.`);
            }
        }

        if (line===`Log out`) {
            let line=line.split(``)
            break;
        }
    }

    let sortedFollowers = Object.keys(followers).sort((a, b) => {
        let totalA = followers[a].likes + followers[a].comments;
        let totalB = followers[b].likes + followers[b].comments;
        return totalA - totalB;
    });

    console.log(`${sortedFollowers.length} followers`);
    for (let follower of sortedFollowers) {
        console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`);
    }
    console.log();
}

problemFollowers(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
;