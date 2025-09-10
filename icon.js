// 图标相关：URL 生成和首页用户渲染
function getIconUrl(userName) {
    return `https://r4.dlozs.top/images/${userName}.jpg`;
}

async function loadUsers() {
    const data = await getTweetData();
    const users = {};
    data.forEach(tweet => {
        const { screen_name, name } = tweet;
        if (!users[screen_name]) {
            users[screen_name] = { name };
        }
    });

    const userList = document.getElementById('user-list');
    Object.keys(users).forEach(screenName => {
        const user = users[screenName];
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <img src="${getIconUrl(user.name)}" alt="${user.name}'s avatar">
            <p>${user.name} (@${screenName})</p>
        `;
        card.onclick = () => {
            window.location.href = `user.html?screen_name=${screenName}`;
        };
        userList.appendChild(card);
    });
}